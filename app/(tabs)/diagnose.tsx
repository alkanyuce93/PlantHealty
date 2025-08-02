import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function DiagnoseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnose</Text>
      <Text style={styles.subtitle}>Plant identification and diagnosis features will be here.</Text>
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
}); 