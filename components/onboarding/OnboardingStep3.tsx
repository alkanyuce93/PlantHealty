import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '../../store/hooks';
import { completeOnboarding } from '../../store/slices/onboardingSlice';
import Button from '../common/Button';

const { width, height } = Dimensions.get('window');

export default function OnboardingStep3() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleContinue = () => {
    dispatch(completeOnboarding());
    router.replace('/(tabs)');
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
        <Text style={styles.title}>Get plant care guides</Text>
      </View>

      {/* Background Floating Icons */}
      <View style={[styles.floatingIcon, styles.plantIcon]}>
        <Text style={styles.iconText}>🌿</Text>
      </View>
      <View style={[styles.floatingIcon, styles.sunIcon]}>
        <Text style={styles.iconText}>☀️</Text>
      </View>

      {/* Plant Detail Card */}
      <View style={styles.cardContainer}>
        <View style={styles.plantCard}>
          {/* Plant Image */}
          <View style={styles.plantImageContainer}>
            <View style={styles.plantImage}>
              <View style={styles.orchidStem} />
              <View style={styles.orchidFlower1} />
              <View style={styles.orchidFlower2} />
              <View style={styles.orchidFlower3} />
            </View>
          </View>

          {/* Plant Info */}
          <View style={styles.plantInfo}>
            <Text style={styles.category}>Flowering Plants</Text>
            <Text style={styles.plantName}>Red Moth Orchids</Text>
            
            {/* Care Summary */}
            <View style={styles.careSummary}>
              <View style={styles.careItem}>
                <Text style={styles.careIcon}>❤️</Text>
                <Text style={styles.careText}>Medium</Text>
              </View>
              <View style={styles.careItem}>
                <Text style={styles.careIcon}>☀️</Text>
                <Text style={styles.careText}>Full Sun</Text>
              </View>
              <View style={styles.careItem}>
                <Text style={styles.careIcon}>💧</Text>
                <Text style={styles.careText}>3-5 days</Text>
              </View>
            </View>

            {/* Plant Overview */}
            <Text style={styles.sectionTitle}>Plant Overview</Text>
            <Text style={styles.description}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.
            </Text>

            {/* Plant Details */}
            <View style={styles.detailsContainer}>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🌱</Text>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailLabel}>Plant Type</Text>
                  <Text style={styles.detailValue}>Perennial</Text>
                </View>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>📏</Text>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailLabel}>Mature Size</Text>
                  <Text style={styles.detailValue}>15"</Text>
                </View>
              </View>
            </View>

            {/* Scroll Indicator */}
            <View style={styles.scrollIndicator} />
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
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
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
  floatingIcon: {
    position: 'absolute',
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  plantIcon: {
    backgroundColor: '#10B981',
    top: height * 0.15,
    left: width * 0.05,
  },
  sunIcon: {
    backgroundColor: '#F59E0B',
    top: height * 0.12,
    right: width * 0.05,
  },
  iconText: {
    fontSize: width * 0.035,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.05,
  },
  plantCard: {
    width: width * 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  plantImageContainer: {
    height: height * 0.25,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    alignItems: 'center',
  },
  orchidStem: {
    width: width * 0.02,
    height: height * 0.15,
    backgroundColor: '#228B22',
    borderRadius: width * 0.01,
  },
  orchidFlower1: {
    position: 'absolute',
    top: height * 0.02,
    width: width * 0.08,
    height: height * 0.06,
    backgroundColor: '#FF6B6B',
    borderRadius: width * 0.04,
    transform: [{ rotate: '-15deg' }],
  },
  orchidFlower2: {
    position: 'absolute',
    top: height * 0.06,
    left: width * 0.02,
    width: width * 0.07,
    height: height * 0.05,
    backgroundColor: '#FF8E8E',
    borderRadius: width * 0.035,
    transform: [{ rotate: '10deg' }],
  },
  orchidFlower3: {
    position: 'absolute',
    top: height * 0.08,
    right: width * 0.015,
    width: width * 0.06,
    height: height * 0.04,
    backgroundColor: '#FF6B6B',
    borderRadius: width * 0.03,
    transform: [{ rotate: '5deg' }],
  },
  plantInfo: {
    padding: width * 0.05,
  },
  category: {
    fontSize: width * 0.025,
    color: '#666',
    marginBottom: height * 0.005,
  },
  plantName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.02,
  },
  careSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },
  careItem: {
    alignItems: 'center',
  },
  careIcon: {
    fontSize: width * 0.04,
    marginBottom: height * 0.005,
  },
  careText: {
    fontSize: width * 0.025,
    color: '#666',
  },
  sectionTitle: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.015,
  },
  description: {
    fontSize: width * 0.03,
    color: '#666',
    lineHeight: width * 0.04,
    marginBottom: height * 0.03,
  },
  detailsContainer: {
    marginBottom: height * 0.02,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.015,
  },
  detailIcon: {
    fontSize: width * 0.035,
    marginRight: width * 0.03,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: width * 0.025,
    color: '#666',
  },
  detailValue: {
    fontSize: width * 0.03,
    color: '#333',
    fontWeight: '500',
  },
  scrollIndicator: {
    position: 'absolute',
    right: width * 0.02,
    top: height * 0.1,
    width: width * 0.01,
    height: height * 0.3,
    backgroundColor: '#E5E7EB',
    borderRadius: width * 0.005,
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