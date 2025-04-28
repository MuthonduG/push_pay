import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <Image 
        source={require('@/assets/images/welcome.png')} 
        style={styles.image}
      />
      
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={styles.subtitle}>Manage your finances easily</Text>
      
      <View style={styles.buttonsContainer}>
        <Link href="/(auth)/login" style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Link>
        
        <Link href="/(auth)/signup" style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Create Account</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0066FF',
  },
  outlineButtonText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
});