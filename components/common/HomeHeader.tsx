import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts } from '@/constants/Colors';
import { wp } from '@/utils/dimensions';

const HomeHeader: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 17) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  const getWeatherIcon = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return 'partly-sunny'; // Day time
    }
    return 'moon'; // Night time
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, plant lover!</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{getGreeting()}</Text>
        <Ionicons name={getWeatherIcon()} size={20} color={Colors.mainText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    paddingTop: wp(16),
    paddingBottom: wp(8),
    paddingHorizontal: wp(24),
  },
  greeting: {
    fontSize: wp(16),
    fontFamily: Fonts.Rubik_400,
    fontWeight: 400,
    lineHeight: wp(16),
    letterSpacing: wp(0.07),
    color: 'rgba(19, 35, 27, 1)', // Exact color from the image
    marginBottom: wp(4),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(24),
    fontWeight: 'bold',
    color: Colors.mainText,
    marginRight: wp(8),
  },
});

export default HomeHeader; 