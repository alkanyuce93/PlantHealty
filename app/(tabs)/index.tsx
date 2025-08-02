import { StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/hooks';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { wp } from '@/utils/dimensions';

export default function TabOneScreen() {
  const isOnboardingCompleted = useAppSelector((state) => state.onboarding.isCompleted);

  return (
    <View style={styles.container}>
      <View style={{
        alignItems:"flex-start",
        justifyContent:"flex-start",
      }}>
        <Text>Hi, plant lover!</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(24)
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
