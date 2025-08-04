import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Colors, Fonts } from '@/constants';
import { wp, hp } from '@/utils';

interface ComingSoonScreenProps {
  title: string;
}

export default function ComingSoonScreen({ title }: ComingSoonScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>This feature is under development and will be available in the next update.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: wp(24),
    fontFamily: Fonts.Rubik_700,
    fontWeight: '700',
    color: Colors.mainText,
    marginBottom: hp(12),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp(16),
    fontFamily: Fonts.Rubik_400,
    fontWeight: '400',
    color: Colors.mainTextTransparent,
    textAlign: 'center',
    lineHeight: wp(24),
    paddingHorizontal: wp(40),
  },
}); 