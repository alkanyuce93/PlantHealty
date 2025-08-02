import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Referans ekran boyutları (tasarımda kullanılan)
const REFERENCE_WIDTH = 375;
const REFERENCE_HEIGHT = 812;

// Referans image boyutları
const REFERENCE_IMAGE_WIDTH = 375;
const REFERENCE_IMAGE_HEIGHT = 499;

export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Ekran boyutlarına göre image boyutlarını hesaplar
 * @param imageWidth - Orijinal image genişliği
 * @param imageHeight - Orijinal image yüksekliği
 * @returns Hesaplanmış image boyutları
 */
export const calculateImageDimensions = (
  imageWidth: number = REFERENCE_IMAGE_WIDTH,
  imageHeight: number = REFERENCE_IMAGE_HEIGHT
): ImageDimensions => {
  // Ekran genişliğine göre scale faktörü
  const scaleFactor = screenWidth / REFERENCE_WIDTH;
  
  // Image boyutlarını hesapla
  const calculatedWidth = imageWidth * scaleFactor;
  const calculatedHeight = imageHeight * scaleFactor;
  
  return {
    width: calculatedWidth,
    height: calculatedHeight,
  };
};

/**
 * Aspect ratio'yu koruyarak image boyutlarını hesaplar
 * @param imageWidth - Orijinal image genişliği
 * @param imageHeight - Orijinal image yüksekliği
 * @param maxWidth - Maksimum genişlik (opsiyonel)
 * @param maxHeight - Maksimum yükseklik (opsiyonel)
 * @returns Hesaplanmış image boyutları
 */
export const calculateImageDimensionsWithAspectRatio = (
  imageWidth: number = REFERENCE_IMAGE_WIDTH,
  imageHeight: number = REFERENCE_IMAGE_HEIGHT,
  maxWidth?: number,
  maxHeight?: number
): ImageDimensions => {
  const aspectRatio = imageWidth / imageHeight;
  
  let calculatedWidth = screenWidth * 0.9; // Ekran genişliğinin %90'ı
  let calculatedHeight = calculatedWidth / aspectRatio;
  
  // Maksimum genişlik kontrolü
  if (maxWidth && calculatedWidth > maxWidth) {
    calculatedWidth = maxWidth;
    calculatedHeight = calculatedWidth / aspectRatio;
  }
  
  // Maksimum yükseklik kontrolü
  if (maxHeight && calculatedHeight > maxHeight) {
    calculatedHeight = maxHeight;
    calculatedWidth = calculatedHeight * aspectRatio;
  }
  
  return {
    width: calculatedWidth,
    height: calculatedHeight,
  };
};

/**
 * Onboarding image'ları için özel helper
 * @param imageNumber - Image numarası (1, 2, 3)
 * @returns Hesaplanmış image boyutları
 */
export const getOnboardingImageDimensions = (imageNumber: number): ImageDimensions => {
  // Referans resimdeki değerler:
  // Referans ekran: 375 x 812
  // Referans image: 375 x 499
  // Yukarıdan margin: 168px
  
  // Sizin ekranınız: 390 x 844
  // Scale faktörü hesaplama
  const scaleFactor = screenWidth / REFERENCE_WIDTH; // 390 / 375 = 1.04
  
  // Image boyutlarını scale faktörüne göre hesapla
  const calculatedWidth = REFERENCE_IMAGE_WIDTH * scaleFactor; // 375 * 1.04 = 390
  const calculatedHeight = REFERENCE_IMAGE_HEIGHT * scaleFactor; // 499 * 1.04 = 519
  
  return {
    width: calculatedWidth,
    height: calculatedHeight,
  };
}; 