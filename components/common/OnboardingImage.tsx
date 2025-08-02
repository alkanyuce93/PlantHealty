import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getOnboardingImageDimensions } from '../../utils/imageHelper';
import { hp, wp } from '../../utils/dimensions';

interface OnboardingImageProps {
  imageNumber: number;
  source: any;
  style?: any;
  width?: number;
  height?: number;
  customDimensions?: boolean;
}

export default function OnboardingImage({ 
  imageNumber, 
  source, 
  style,
  width,
  height,
  customDimensions = false
}: OnboardingImageProps) {
  const defaultImageDimensions = getOnboardingImageDimensions(imageNumber);
  
  const imageDimensions = customDimensions && width && height 
    ? { width: wp(width), height: hp(height) }
    : defaultImageDimensions;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={source}
        style={[styles.image, imageDimensions]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: hp(24),
    marginBottom: hp(24),
  },
  image: {
    alignSelf: 'center',
  },
}); 