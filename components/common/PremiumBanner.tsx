import React from 'react';
import {  StyleSheet, TouchableOpacity, Image } from 'react-native';
import { hp, wp } from '@/utils';

interface PremiumBannerProps {
  onPress?: () => void;
}

const PremiumBanner: React.FC<PremiumBannerProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image
      source={require('@/assets/images/Premium-Box.png')}
      style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(16),
  },
  image: {
    width: wp(327),
    height: wp(64),
    alignSelf: 'center',
  },
});

export default PremiumBanner; 