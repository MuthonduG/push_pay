import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="welcome" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          title: 'Login',
          presentation: 'modal' 
        }} 
      />
      <Stack.Screen 
        name="signup" 
        options={{ 
          title: 'Create Account',
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}