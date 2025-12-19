// src/components/HomeEventCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

interface Props {
    item: any;
    onPress?: (item: any) => void;
}

export default function HomeEventCard({ item, onPress }: Props) {
    const [state, setState] = useState({
        isFavorite: false,
    });

    const markFavorite = () => {
        setState(prev => ({
            ...prev,
            isFavorite: !prev.isFavorite,
        }));
    };


    return (
        <Pressable onPress={() => onPress?.(item)} style={styles.container}>
            {item.image && (
                <Image source={{ uri: item.image }} style={styles.image} />
            )}

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                {item.date && <Text style={styles.meta}>{item.date}</Text>}
                {item.location && <Text style={styles.meta}>{item.location}</Text>}
            </View>

            <Pressable onPress={markFavorite}>
                <Image
                    source={
                        state.isFavorite
                            ? require('../../../assets/icons/full-heart.png')
                            : require('../../../assets/icons/heart.png')
                    }
                    style={styles.icon}
                />
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        gap: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.gray,
        padding: 8,
        marginBottom: 12,
    },
    image: {
        width: 90,
        height: 120,
        borderRadius: 12,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        gap: 16
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white
    },
    meta: {
        fontSize: 12,
        opacity: 0.7,
        color: colors.white
    },
    icon: {
        width: 25,
        height: 25
    }
});

