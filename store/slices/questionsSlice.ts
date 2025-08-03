import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { questionsAPI } from '../../services/api';

// Types
export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface QuestionsState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await questionsAPI.getQuestions();
    return response.data;
  }
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    clearQuestions: (state) => {
      state.questions = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch questions';
      });
  },
});

export const { clearQuestions } = questionsSlice.actions;
export default questionsSlice.reducer; 