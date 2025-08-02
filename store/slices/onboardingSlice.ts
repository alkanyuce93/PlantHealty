import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  currentStep: number;
  isCompleted: boolean;
  userData: {
    name?: string;
    email?: string;
  };
}

const initialState: OnboardingState = {
  currentStep: 0,
  isCompleted: false,
  userData: {},
};

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
});

export const {
  setCurrentStep,
  nextStep,
  previousStep,
  completeOnboarding,
  updateUserData,
} = onboardingSlice.actions;

export default onboardingSlice.reducer; 