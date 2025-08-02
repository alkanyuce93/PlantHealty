import { StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/hooks';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const isOnboardingCompleted = useAppSelector((state) => state.onboarding.isCompleted);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlantApp</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.subtitle}>
        {isOnboardingCompleted ? 'Welcome to PlantApp!' : 'Onboarding completed!'}
      </Text>
      
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
