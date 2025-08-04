import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';
import { hp, wp } from '../../utils';

interface PaginationProps {
  totalSteps: number;
  currentStep: number;
  style?: any;
}

export default function Pagination({ 
  totalSteps, 
  currentStep, 
  style 
}: PaginationProps) {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentStep - 1 ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    marginHorizontal: wp(4),
    marginTop: hp(10),
  },
  dotInactive: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: Colors.dotInactive,
  },
  dotActive: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: Colors.dotActive,
  },
}); 