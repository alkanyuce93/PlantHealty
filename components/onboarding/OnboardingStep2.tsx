import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { nextStep } from '../../store/slices/onboardingSlice';
import Button from '../common/Button';

const { width, height } = Dimensions.get('window');

export default function OnboardingStep2() {
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(nextStep());
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Take a photo to identify the plant!</Text>
      </View>

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraFrame}>
          {/* Camera Controls */}
          <View style={styles.cameraControls}>
            <View style={styles.controlButton}>
              <Text style={styles.controlText}>✕</Text>
            </View>
            <View style={styles.controlButton}>
              <Text style={styles.controlText}>⚡</Text>
            </View>
          </View>

          {/* Plant in Camera View */}
          <View style={styles.plantInCamera}>
            <View style={styles.pot}>
              <View style={styles.potTop} />
              <View style={styles.potBody} />
            </View>
            <View style={styles.plant}>
              <View style={styles.leaf1} />
              <View style={styles.leaf2} />
              <View style={styles.leaf3} />
            </View>
          </View>

          {/* Bottom Camera Controls */}
          <View style={styles.bottomControls}>
            <View style={styles.galleryButton}>
              <Text style={styles.iconText}>🖼️</Text>
            </View>
            
            <View style={styles.shutterButton}>
              <Text style={styles.iconText}>📷</Text>
            </View>
            
            <View style={styles.flipButton}>
              <Text style={styles.iconText}>🔄</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={handleContinue}
          backgroundColor="#28AF6E"
          textColor="#FFFFFF"
          style={styles.button}
        />
        
        {/* Pagination */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: height * 0.1,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.05,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraFrame: {
    width: width * 0.85,
    height: height * 0.6,
    backgroundColor: '#000',
    borderRadius: width * 0.05,
    overflow: 'hidden',
    position: 'relative',
  },
  cameraControls: {
    position: 'absolute',
    top: height * 0.02,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    zIndex: 1,
  },
  controlButton: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    color: '#FFF',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  plantInCamera: {
    position: 'absolute',
    top: height * 0.15,
    left: width * 0.2,
    alignItems: 'center',
  },
  pot: {
    alignItems: 'center',
  },
  potTop: {
    width: width * 0.15,
    height: height * 0.015,
    backgroundColor: '#D4A574',
    borderRadius: width * 0.075,
  },
  potBody: {
    width: width * 0.12,
    height: height * 0.06,
    backgroundColor: '#CD853F',
    borderRadius: width * 0.06,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  plant: {
    position: 'absolute',
    bottom: height * 0.06,
  },
  leaf1: {
    width: width * 0.1,
    height: height * 0.08,
    backgroundColor: '#228B22',
    borderRadius: width * 0.05,
    transform: [{ rotate: '-15deg' }],
    marginBottom: height * 0.015,
  },
  leaf2: {
    width: width * 0.08,
    height: height * 0.07,
    backgroundColor: '#32CD32',
    borderRadius: width * 0.04,
    transform: [{ rotate: '10deg' }],
    marginLeft: width * 0.02,
  },
  leaf3: {
    width: width * 0.09,
    height: height * 0.075,
    backgroundColor: '#228B22',
    borderRadius: width * 0.045,
    transform: [{ rotate: '5deg' }],
    marginLeft: -width * 0.015,
  },
  bottomControls: {
    position: 'absolute',
    bottom: height * 0.05,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
  },
  galleryButton: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: width * 0.035,
  },
  shutterButton: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  shutterInner: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: '#FFF',
  },
  flipButton: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipIcon: {
    fontSize: width * 0.035,
  },
  footer: {
    marginBottom: height * 0.05,
  },
  button: {
    marginBottom: height * 0.02,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.01,
    backgroundColor: '#DDD',
    marginHorizontal: width * 0.01,
  },
  dotActive: {
    backgroundColor: '#10B981',
  },
}); 