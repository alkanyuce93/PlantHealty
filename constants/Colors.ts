const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Design System Colors
export const Colors = {
  // Main Text Colors
  mainText: '#13231B',
  mainTextTransparent: 'rgba(19, 35, 27, 0.7)', // Updated to match design
  
  // Button Colors
  primaryGreen: '#28AF6E',
  
  // Background Colors
  background: '#fff',
  
  // Legal Text Colors
  legalText: 'rgba(89, 113, 101, 0.7)',
  
  // Link Colors
  linkColor: 'rgba(89, 113, 101, 0.7)',
  
  // Pagination Colors
  dotInactive: 'rgba(19, 35, 27, 0.25)',
  dotActive: 'rgba(19, 35, 27, 1)',
};


// Design System Fonts
export const Fonts = {
  Rubik_300: 'Rubik_300Light',
  Rubik_400: 'Rubik_400Regular',
  Rubik_500: 'Rubik_500Medium',
  Rubik_600: 'Rubik_600SemiBold',
  Rubik_700: 'Rubik_700Bold',
  Rubik_800: 'Rubik_800ExtraBold',
  Rubik_900: 'Rubik_900Black',
  VisbyCF_800: 'Rubik_800ExtraBold', // Visby CF Extra Bold equivalent
};

export default {
  light: {
    text: '#000',
    background: 'rgba(251, 250, 250, 1)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: 'rgba(251, 250, 250, 1)',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
