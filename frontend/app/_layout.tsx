import { Stack, Redirect } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(auth)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(main)" 
        options={{ headerShown: false }} 
      />
      {/* Redirect root path to welcome screen */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
        redirect
      />
    </Stack>
  );
}