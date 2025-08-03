import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { nextStep } from '../../store/slices/onboardingSlice';
import { Colors } from '../../constants/Colors';
import { hp, wp } from '../../utils/dimensions';
import Button from '../common/Button';
import OnboardingImage from '../common/OnboardingImage';
import Pagination from '../common/Pagination';
import OnboardingHeader from '../common/OnboardingHeader';

export default function OnboardingStep2() {
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(nextStep());
  };

  return (
    <View style={styles.backgroundImage}>
      <OnboardingHeader
        title="Take a photo to identify the plant!"
        underlineText="identify"
        brushImage={true}
        style={{ marginRight: wp(36) }}
        brushShadow={false}
      />

      <OnboardingImage
        imageNumber={2}
        source={require('../../assets/images/Content.png')}
        width={600}
        height={710}
        customDimensions={true}
        style={{
          marginTop: hp(-20),
        }}
      />


      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          backgroundColor={Colors.primaryGreen}
          textColor="#FFFFFF"
          style={styles.button}
        />

        <Pagination totalSteps={3} currentStep={1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  imageContainer: {
    alignSelf: 'center',
    marginBottom: hp(24),
    width: wp(390),
    backgroundColor: "blue"
  },
  footer: {
    position: 'absolute',
    bottom: hp(0),
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: wp(20),
    height: hp(145),

  },
  button: {
    marginBottom: hp(20),
  },
});