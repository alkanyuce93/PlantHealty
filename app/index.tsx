import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { useAppSelector, useAppDispatch, checkOnboardingStatus } from '../store';
import { Colors } from '../constants';
import { OnboardingStep1, OnboardingStep2, OnboardingStep3, OnboardingStep4 } from '@/components';



const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const dispatch = useAppDispatch();
  const { currentStep, isCompleted, isLoading } = useAppSelector((state) => state.onboarding);

  useEffect(() => {
    dispatch(checkOnboardingStatus());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      const { router } = require('expo-router');
      router.replace('/(tabs)');
    }
  }, [isCompleted]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <OnboardingStep1 />;
      case 1:
        return <OnboardingStep2 />;
      case 2:
        return <OnboardingStep3 />;
      case 3:
        return <OnboardingStep4 />;
      default:
        return <OnboardingStep1 />;
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primaryGreen} />
      </View>
    );
  }

  if (isCompleted) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {renderStep()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 