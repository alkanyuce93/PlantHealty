import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  backgroundColor = '#28AF6E',
  textColor = '#FFFFFF',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: screenWidth * (327 / 375), // 375 ekran genişliğinde 327 olacak
    height: screenWidth * (327 / 375) * (56 / 327), // 327:56 oranı korunuyor
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
}); 