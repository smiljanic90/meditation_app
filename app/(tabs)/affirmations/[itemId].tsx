import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AffirmationPractice = () => {
  const router = useRouter();
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affData = AFFIRMATION_GALLERY[index].data;
      const affToStart = affData.find((a) => a.id === Number(itemId));
      if (affToStart) {
        setAffirmation(affToStart);
        const affArr = affToStart.text.split('.');
        // remove the last elment if its an empty string
        if (affArr[affArr.length - 1] === '') {
          affArr.pop();
        }
        setSentences(affArr);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <MaterialCommunityIcons
              name="chevron-left-circle-outline"
              size={50}
              color="white"
            />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="justify-center items-center flex-1">
                {sentences?.map((sentence, index) => (
                  <Text
                    key={index}
                    className="text-white text-3xl mb-12 mt-5 font-bold text-center"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
