import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View className="flex-1 justify-center items-center">
              <MaterialCommunityIcons
                name="meditation"
                size={80}
                color="white"
              />
              <Text className="text-center text-white font-bold text-5xl">
                Meditacija
              </Text>
              <Text className="text-center text-white text-regular text-3xl mt-3 leading-10">
                Opusti svoje misli uz muziku ili tekst podrške!
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push('/nature-meditate')}
                title="Započni"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
