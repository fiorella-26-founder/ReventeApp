// src/components/Carousel/AppCarousel.tsx
import React from 'react';
import { View, Image, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { colors } from '../../theme/colors';
const { width } = Dimensions.get('window');

interface Props {
  data: any[];
  onPressItem?: (item: any) => void;
  onToggleFavorite?: (item: any) => void;
  favorites?: string[]; // ids favoritos
}


export default function AppCarousel({ data, onPressItem, onToggleFavorite, favorites = [] }: Props) {
  return (
    <Carousel
      width={width}
      height={220}
      data={data}
      autoPlay
      loop
      renderItem={({ item }) => {
        const isFavorite = favorites.includes(item.id);

        return (
          <Pressable onPress={() => onPressItem?.(item)}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.overlay}>
                <View style={styles.dataCtnr}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.desc}</Text>
                    <Text style={styles.title}>{item.price}</Text>
                  </View>

                  <Pressable
                    onPress={() => onToggleFavorite?.(item)}
                    hitSlop={10}
                    style={styles.icon}

                  >
                    <Image
                      source={
                        isFavorite
                          ? require('../../../assets/icons/full-heart.png')
                          : require('../../../assets/icons/heart.png')
                      }
                      style={styles.icon}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
        );
      }}
    />
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
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  dataCtnr: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
  },
  icon: {
    width: 28,
    height: 28,
    alignSelf: 'center'
  }
});
