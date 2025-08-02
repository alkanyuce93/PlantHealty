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
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
