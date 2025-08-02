# Expo SVG Kurulum ve Kullanım Rehberi

## Kurulum

Expo projesinde SVG kullanmak için `react-native-svg` paketini kurmanız gerekiyor:

```bash
npx expo install react-native-svg
```

Bu komut Expo SDK'nızla uyumlu olan SVG paketini otomatik olarak kuracaktır.

## Temel Kullanım

### 1. Import

```tsx
// Expo önerilen yöntem
import * as Svg from 'react-native-svg';

// Veya spesifik import
import Svg, { Circle, Rect, Path, Text as SvgText } from 'react-native-svg';
```

### 2. Basit SVG Örneği

```tsx
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

const SimpleSvg = () => {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="40" fill="#28AF6E" />
      <Rect x="10" y="10" width="20" height="20" fill="#4CAF50" />
    </Svg>
  );
};
```

## Kullanılabilir SVG Elementleri

### Temel Şekiller
- `Circle` - Daire
- `Rect` - Dikdörtgen
- `Ellipse` - Elips
- `Line` - Çizgi
- `Polyline` - Çoklu çizgi
- `Polygon` - Çokgen

### Gelişmiş Elementler
- `Path` - Özel yol (en esnek)
- `Text` - Metin
- `Image` - Resim
- `Defs` - Tanımlar
- `G` - Grup

### Stil Elementleri
- `LinearGradient` - Doğrusal gradyan
- `RadialGradient` - Radyal gradyan
- `Pattern` - Desen

## Özellikler

### Genel Özellikler
- `width`, `height` - Boyutlar
- `viewBox` - Görünüm alanı
- `fill` - Dolgu rengi
- `stroke` - Kenarlık rengi
- `strokeWidth` - Kenarlık kalınlığı
- `opacity` - Şeffaflık

### Path Özellikleri
- `d` - Yol tanımı
- `fillRule` - Dolgu kuralı
- `strokeLinecap` - Çizgi ucu stili
- `strokeLinejoin` - Çizgi birleşim stili

## Örnekler

### 1. Plant İkonu

```tsx
const PlantIcon = ({ size = 24, color = '#28AF6E' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
        fill={color}
      />
      <Circle cx="12" cy="12" r="3" fill={color} opacity="0.3" />
    </Svg>
  );
};
```

### 2. Gradient Kullanımı

```tsx
import { LinearGradient, Stop } from 'react-native-svg';

const GradientIcon = () => {
  return (
    <Svg width={100} height={100}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#28AF6E" stopOpacity="1" />
          <Stop offset="100%" stopColor="#4CAF50" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Circle cx="50" cy="50" r="40" fill="url(#grad)" />
    </Svg>
  );
};
```

### 3. Animasyonlu SVG

```tsx
import { Animated } from 'react-native';

const AnimatedSvg = () => {
  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <Svg width={50} height={50}>
        <Circle cx="25" cy="25" r="20" fill="#28AF6E" />
      </Svg>
    </Animated.View>
  );
};
```

## Best Practices

1. **ViewBox Kullanın** - SVG'nin responsive olması için viewBox tanımlayın
2. **Boyutları Dinamik Yapın** - width ve height prop'larını kullanın
3. **Renkleri Props Olarak Geçin** - SVG'leri yeniden kullanılabilir yapın
4. **Performance** - Karmaşık SVG'ler için memoization kullanın
5. **Accessibility** - accessibilityLabel ekleyin

## TypeScript Desteği

```tsx
interface SvgIconProps {
  size?: number;
  color?: string;
  style?: any;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  size = 24, 
  color = '#000',
  style 
}) => {
  return (
    <Svg width={size} height={size} style={style}>
      {/* SVG içeriği */}
    </Svg>
  );
};
```

## Sorun Giderme

### Yaygın Hatalar

1. **"react-native-svg is not linked"** - Expo managed workflow kullanıyorsanız bu hata normaldir
2. **SVG görünmüyor** - width ve height değerlerini kontrol edin
3. **Performance sorunları** - Karmaşık SVG'ler için React.memo kullanın

### Expo Development Build

Eğer native modüller kullanıyorsanız:

```bash
npx expo install --fix
npx expo run:ios  # veya run:android
```

## Faydalı Araçlar ve Kaynaklar

### SVG Kaynakları
- [The Noun Project](https://thenounproject.com/) - Hazır SVG ikonları
- [Figma](https://www.figma.com/) - SVG oluşturma ve düzenleme
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizasyonu

### Dönüştürme Araçları
- [SVGR](https://react-svgr.com/playground/) - SVG'yi React component'ine dönüştürme

## Kaynaklar

- [Expo SVG Resmi Dokümantasyonu](https://docs.expo.dev/versions/latest/sdk/svg/)
- [react-native-svg Dokümantasyonu](https://github.com/react-native-svg/react-native-svg)
- [SVG Path Komutları](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) 