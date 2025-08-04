import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import categoriesReducer from './slices/categoriesSlice';
import questionsReducer from './slices/questionsSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export { useAppSelector, useAppDispatch } from './hooks';

// Onboarding Slice
export { 
  nextStep, 
  saveOnboardingStatus, 
  checkOnboardingStatus 
} from './slices/onboardingSlice';

// Categories Slice
export { 
  fetchCategories, 
  clearCategories 
} from './slices/categoriesSlice';
export type { Category } from './slices/categoriesSlice';

// Questions Slice
export { 
  fetchQuestions, 
  clearQuestions 
} from './slices/questionsSlice';
export type { Question } from './slices/questionsSlice'; 