import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Fonts } from '../../constants/Colors';
import { hp, wp } from '../../utils/dimensions';

interface OnboardingHeaderProps {
  title: string;
  subtitle?: string;
  boldText?: string;
  underlineText?: string;
  brushImage?: boolean;
  brushShadow?: boolean;
  brushImageStyle?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
    width?: number;
    height?: number;
  };
  style?: any;
}

export default function OnboardingHeader({
  title,
  subtitle,
  boldText,
  underlineText,
  brushImage = false,
  brushShadow = false,
  brushImageStyle,
  style
}: OnboardingHeaderProps) {
  const renderTitle = () => {
    if (boldText) {
      const parts = title.split(boldText);
      return (
        <Text style={titleStyle}>
          {parts[0]}
          <Text style={brushShadow ? styles.boldText : styles.boldTextNoShadow}>{boldText}</Text>
          {parts[1]}
        </Text>
      );
    }
    
    if (underlineText) {
      const parts = title.split(underlineText);
      return (
        <Text style={titleStyle}>
          {parts[0]}
          <Text style={styles.underlineText}>{underlineText}</Text>
          {parts[1]}
        </Text>
      );
    }
    
    return <Text style={titleStyle}>{title}</Text>;
  };

  const brushImageStyleCombined = {
    ...styles.brushImage,
    width: brushImageStyle?.width || wp(141),
    height: brushImageStyle?.height || hp(14),
    top: brushImageStyle?.top || hp(31),
    right: brushImageStyle?.right || wp(2),
    ...(brushShadow && {
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: hp(4) },
      shadowOpacity: 1,
      shadowRadius: wp(4),
      elevation: 8,
    }),
  };

  const titleStyle = brushShadow ? {
    ...styles.title,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: hp(4) },
    textShadowRadius: wp(4),
  } : {
    ...styles.title,
    textShadowColor: 'transparent',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  };

  return (
    <View style={[styles.container, style]}>
      {renderTitle()}
      
      {subtitle && (
        <Text style={brushShadow ? styles.subtitle : styles.subtitleNoShadow}>{subtitle}</Text>
      )}
      
      {brushImage && (
        <Image
          source={require('../../assets/images/Brush.png')}
          style={brushImageStyleCombined}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(59),
    marginLeft: wp(24),
    marginRight: wp(51),
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
    letterSpacing: wp(-1),
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: hp(4) },
    textShadowRadius: wp(4),
  },
  boldText: {
    fontFamily: Fonts.Rubik_700,
    letterSpacing: wp(-1),
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: hp(4) },
    textShadowRadius: wp(4),
  },
  boldTextNoShadow: {
    fontFamily: Fonts.Rubik_700,
    letterSpacing: wp(-1),
    textShadowColor: 'transparent',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  underlineText: {
    fontFamily: Fonts.Rubik_800,
    letterSpacing: wp(-1),
  },
  subtitle: {
    fontSize: wp(16),
    color: Colors.mainTextTransparent,
    textAlign: 'left',
    lineHeight: wp(23),
    paddingHorizontal: 0,
    fontFamily: Fonts.Rubik_400,
    letterSpacing: 0.07,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: hp(4) },
    textShadowRadius: wp(4),
  },
  subtitleNoShadow: {
    fontSize: wp(16),
    color: Colors.mainTextTransparent,
    textAlign: 'left',
    lineHeight: wp(23),
    paddingHorizontal: 0,
    fontFamily: Fonts.Rubik_400,
    letterSpacing: 0.07,
    textShadowColor: 'transparent',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  brushImage: {
    width: wp(136),
    height: hp(13),
    position: 'absolute',
    top: hp(30),
    right: wp(2),
  },
}); 