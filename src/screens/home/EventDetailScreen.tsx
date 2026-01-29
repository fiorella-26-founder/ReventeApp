import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../theme/colors';
import { theme } from '../../theme/theme';
import { useRoute } from '@react-navigation/native';

export default function EventDetailScreen() {
    const route = useRoute<any>();
    const { event } = route.params;

    return (
        <SafeAreaView edges={['top']} style={theme.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={{ uri: event.image }} style={styles.image}
                    />
                    <Text style={[theme.title, styles.title]}>
                        {event.title}
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
    },
    image: {
        width: 90,
        height: 120,
        borderRadius: 12,
    },
});
