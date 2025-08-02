import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect, Path, Text as SvgText } from 'react-native-svg';

interface SvgExampleProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgExample: React.FC<SvgExampleProps> = ({ 
  width = 100, 
  height = 100, 
  color = '#28AF6E' 
}) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 100 100">
        {/* Basit bir daire */}
        <Circle
          cx="50"
          cy="50"
          r="40"
          fill={color}
          stroke="#2E7D32"
          strokeWidth="2"
        />
        
        {/* Basit bir dikdörtgen */}
        <Rect
          x="10"
          y="10"
          width="20"
          height="20"
          fill="#4CAF50"
          stroke="#2E7D32"
          strokeWidth="1"
        />
        
        {/* Basit bir path (yaprak şekli) */}
        <Path
          d="M30 60 Q50 40 70 60 Q50 80 30 60"
          fill="#8BC34A"
          stroke="#2E7D32"
          strokeWidth="1"
        />
        
        {/* SVG içinde text */}
        <SvgText
          x="50"
          y="55"
          fontSize="12"
          textAnchor="middle"
          fill="#FFFFFF"
          fontWeight="bold"
        >
          Plant
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SvgExample; 