// src/components/Carousel/AppCarousel.tsx
import React from 'react';
import { View, Image, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { colors } from '../../theme/colors';
const { width } = Dimensions.get('window');

interface Props {
  data: any[];
  onPress?: (item: any) => void;
}

export default function AppCarousel({ data, onPress }: Props) {
  return (
    <View>
      <Carousel
        width={width}
        height={180}
        data={data}
        autoPlay
        autoPlayInterval={3500}
        loop
        pagingEnabled
        renderItem={({ item }) => (
          <Pressable onPress={() => onPress?.(item)}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 30,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
