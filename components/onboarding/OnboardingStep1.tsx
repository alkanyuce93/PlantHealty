import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { nextStep } from '../../store/slices/onboardingSlice';
import { Colors, Fonts } from '../../constants/Colors';
import { hp, wp } from '../../utils/dimensions';
import Button from '../common/Button';
import OnboardingImage from '../common/OnboardingImage';
import OnboardingHeader from '../common/OnboardingHeader';

export default function OnboardingStep1() {
  const dispatch = useAppDispatch();

  const handleGetStarted = () => {
    dispatch(nextStep());
  };

  const handleTermsPress = () => {
    Alert.alert('Terms of Use', 'Terms of Use content will be displayed here.');
  };

  const handlePrivacyPress = () => {
    Alert.alert('Privacy Policy', 'Privacy Policy content will be displayed here.');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <OnboardingHeader
        title="Welcome to PlantApp"
        subtitle="Identify more than 3000+ plants and 88% accuracy."
        boldText="PlantApp"
        brushShadow={false}
      />

      <OnboardingImage
        imageNumber={1}
        source={require('../../assets/images/Frame-13.png')}
        width={390}
        height={530}
        customDimensions={true}
      />

      <View style={styles.footer}>
        <Button
          title="Get Started"
          onPress={handleGetStarted}
          backgroundColor={Colors.primaryGreen}
          textColor="#FFFFFF"
          style={styles.button}
        />
        <Text style={styles.legalText}>
          By tapping next, you are agreeing to PlantID{' '}
          <Text style={styles.linkText} onPress={handleTermsPress}>
            Terms of Use
          </Text>{' '}
          &{' '}
          <Text style={styles.linkText} onPress={handlePrivacyPress}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
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
  legalText: {
    fontSize: wp(11),
    color: Colors.legalText,
    textAlign: 'center',
    lineHeight: wp(15),
    paddingHorizontal: wp(20),
    letterSpacing: 0.07,
    fontFamily: Fonts.Rubik_400,
    width:wp(300),
  },
  linkText: {
    color: Colors.linkColor,
    textDecorationLine: 'underline',
  },
});