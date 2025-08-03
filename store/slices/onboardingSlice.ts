import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingState {
  currentStep: number;
  isCompleted: boolean;
  isLoading: boolean;
  userData: {
    name?: string;
    email?: string;
  };
}

const initialState: OnboardingState = {
  currentStep: 0,
  isCompleted: false,
  isLoading: true,
  userData: {},
};

const ONBOARDING_KEY = '@onboarding_completed';

export const checkOnboardingStatus = createAsyncThunk(
  'onboarding/checkStatus',
  async () => {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      return false;
    }
  }
);

export const saveOnboardingStatus = createAsyncThunk(
  'onboarding/saveStatus',
  async (completed: boolean) => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, completed.toString());
      return completed;
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      throw error;
    }
  }
);

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1);
    },
    completeOnboarding: (state) => {
      state.isCompleted = true;
    },
    updateUserData: (state, action: PayloadAction<Partial<OnboardingState['userData']>>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkOnboardingStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOnboardingStatus.fulfilled, (state, action) => {
        state.isCompleted = action.payload;
        state.isLoading = false;
      })
      .addCase(checkOnboardingStatus.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(saveOnboardingStatus.fulfilled, (state, action) => {
        state.isCompleted = action.payload;
      });
  },
});

export const {
  setCurrentStep,
  nextStep,
  previousStep,
  completeOnboarding,
  updateUserData,
} = onboardingSlice.actions;

export default onboardingSlice.reducer; 