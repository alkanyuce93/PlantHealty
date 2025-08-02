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
      <View style={styles.header}>
        <Text style={styles.title}>
          Take a photo to <Text style={styles.underlineText}>identify</Text> the plant!
        </Text>
        <Image
          source={require('../../assets/images/Brush.png')}
          style={styles.brushImage}
          resizeMode="contain"
        />
      </View>

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
  header: {
    marginTop: hp(59),
    marginLeft: wp(24),
    marginRight: wp(36),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: wp(28),
    color: Colors.mainText,
    textAlign: 'left',
    marginBottom: hp(12),
    fontFamily: Fonts.Rubik_500,
    lineHeight: wp(28),
    letterSpacing: -1,
  },
  underlineText: {
    fontFamily: Fonts.Rubik_800,
    letterSpacing: -1,
  },
  brushImage: {
    width: wp(136),
    height: hp(13),
    position: 'absolute',
    top: hp(30),
    right: wp(2),
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