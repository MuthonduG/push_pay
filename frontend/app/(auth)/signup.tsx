import { Link, Stack } from 'expo-router';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Create Account' }} />
      
      <Text style={styles.title}>Create a new account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <Link href="/(auth)/login" style={styles.link}>
          <Text>Login</Text>
        </Link>
      </View>
    </View>
  );
}

// Reuse styles from login screen or customize as needed
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  link: {
    fontWeight: 'bold',
    color: '#0066FF',
  },
});