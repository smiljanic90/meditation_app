import { SplashScreen, Stack } from 'expo-router';
// Import your global CSS file
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import TimerProvider from '@/context/TimerContext';

// this will prevent splash screen from auto hidding until loading all assets
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Mono': require('../assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    <TimerProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modal)/adjust-meditation-duration"
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack>
    </TimerProvider>
  );
}
