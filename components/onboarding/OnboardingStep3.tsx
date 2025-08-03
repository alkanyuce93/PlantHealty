import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '../../store/hooks';
import { nextStep } from '../../store/slices/onboardingSlice';
import { Colors, Fonts } from '../../constants/Colors';
import { hp, wp } from '../../utils/dimensions';
import Button from '../common/Button';
import Pagination from '../common/Pagination';
import OnboardingHeader from '../common/OnboardingHeader';

export default function OnboardingStep3() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleContinue = () => {
    dispatch(nextStep());
  };

  return (
    <View style={styles.backgroundImage}>
      <OnboardingHeader
        title="Get plant care guides"
        boldText="care guides"
        style={{ marginRight: wp(74) }}
        brushImage={true}
        brushShadow={true}
        brushImageStyle={{
          top: hp(30),
          right: wp(2),
          width: wp(160),
          height: hp(18),
        }}
      />
     
              <View style={styles.phoneContainer}>
          <Image
            source={require('../../assets/images/Object.png')}
            style={{
              width: wp(411),
              height: hp(325.4),
              position: 'absolute',
              transform: [{ rotate: '-73.6deg' }],
              top:hp(109),
              left:wp(-21),
            }}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/images/Artwork.png')}
            style={{
              width: wp(335.38),
              height: hp(370),
              position:"absolute",
              top:hp(-20),
              right:wp(5),
              zIndex:1000,
            
            }}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/Flat-iPhone.png')}
            style={{
              width: wp(261),
              height: hp(540),
              resizeMode: 'contain',
            }}
          />
        </View>
       
     

     

     
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          backgroundColor={Colors.primaryGreen}
          textColor="#FFFFFF"
          style={styles.button}
        />
        
        <Pagination totalSteps={3} currentStep={2} />
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

  floatingIcon: {
    position: 'absolute',
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  plantIcon: {
    backgroundColor: '#10B981',
    top: hp(120),
    left: wp(20),
  },
  sunIcon: {
    backgroundColor: '#F59E0B',
    top: hp(100),
    right: wp(20),
  },
  iconText: {
    fontSize: wp(16),
  },
  phoneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  phoneMockup: {
    width: wp(411),
    height: hp(325.4),
    position: 'relative',
  },
  phoneContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: wp(20),
    transform: [{ rotate: '-73.6deg' }],
  },
  plantImage: {
    width: '100%',
    height: hp(200),
    marginBottom: hp(20),
  },
  plantInfo: {
    flex: 1,
  },
  category: {
    fontSize: wp(14),
    color: '#666',
    marginBottom: hp(5),
    fontFamily: Fonts.Rubik_400,
  },
  plantName: {
    fontSize: wp(20),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(15),
    fontFamily: Fonts.Rubik_700,
  },
  careSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(20),
  },
  careItem: {
    alignItems: 'center',
  },
  careIcon: {
    fontSize: wp(16),
    marginBottom: hp(5),
  },
  careText: {
    fontSize: wp(12),
    color: '#666',
    fontFamily: Fonts.Rubik_400,
  },
  sectionTitle: {
    fontSize: wp(16),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(10),
    fontFamily: Fonts.Rubik_600,
  },
  description: {
    fontSize: wp(14),
    color: '#666',
    lineHeight: wp(20),
    marginBottom: hp(20),
    fontFamily: Fonts.Rubik_400,
  },
  detailsContainer: {
    marginBottom: hp(15),
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  detailIcon: {
    fontSize: wp(16),
    marginRight: wp(15),
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: wp(12),
    color: '#666',
    fontFamily: Fonts.Rubik_400,
  },
  detailValue: {
    fontSize: wp(14),
    color: '#333',
    fontWeight: '500',
    fontFamily: Fonts.Rubik_500,
  },
  footer: {
    position: 'absolute',
    bottom: hp(0),
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: wp(20),
    height: hp(145),
    backgroundColor:"#fff"
   
  },
  button: {
    marginBottom: hp(20),
  },
}); 