import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { nextStep } from '../../store/slices/onboardingSlice';
import { Colors, Fonts } from '../../constants/Colors';
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
    <ImageBackground
      source={require('../../assets/images/Background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
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
          width={600} // Reference design width
          height={730} // Reference design height
          customDimensions={true}
          style={{
            marginTop:hp(-20),
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
    </ImageBackground>
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
    backgroundColor:"blue"
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: wp(20),
    position: 'absolute',
    bottom: hp(45),
    left: 0,
    right: 0,
  },
  button: {
    marginBottom: hp(20),
  },
});