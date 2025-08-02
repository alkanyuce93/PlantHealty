import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const hp = (value: number) => {
  return value * (height / 812);
};

export const wp = (value: number) => {
  return value * (width / 375);
}; 