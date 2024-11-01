import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePressDurationChange = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  return (
    <View className="flex-1 relative">
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <MaterialCommunityIcons
            name="chevron-left-circle-outline"
            size={50}
            color="white"
          />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Podesi trajanje svoje meditacije
          </Text>
          <View>
            <CustomButton
              title="10 sekundi"
              onPress={() => handlePressDurationChange(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minuta"
              onPress={() => handlePressDurationChange(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minuta"
              onPress={() => handlePressDurationChange(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minuta"
              onPress={() => handlePressDurationChange(15 * 60)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;