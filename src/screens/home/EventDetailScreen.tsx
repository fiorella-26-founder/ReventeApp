import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../theme/colors';
import { theme } from '../../theme/theme';
import { useRoute } from '@react-navigation/native';
import BackButton from '../../components/layout/BackButton';
import AppButton from '../../components/common/AppButton';
import AppTabs, { AppTab } from '../../components/common/AppTabs';
import TraderCard from '../../components/layout/TraderCard';

const traders = [
    {
        id: '1',
        name: 'Carlos Pérez',
        tickets: 2,
        price: 80,
        role: 'seller', // 'buyer' | 'seller'
        avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
        id: '2',
        name: 'María López',
        tickets: 1,
        price: 75,
        role: 'seller',
        avatar: 'https://i.pravatar.cc/100?img=5',
    },
    {
        id: '3',
        name: 'Carlos Pérez',
        tickets: 2,
        price: 80,
        role: 'seller', // 'buyer' | 'seller'
        avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
        id: '4',
        name: 'María López',
        tickets: 1,
        price: 75,
        role: 'seller',
        avatar: 'https://i.pravatar.cc/100?img=5',
    },
];

const traders2 = [
    {
        id: '1',
        name: 'Carlos Pérez',
        tickets: 2,
        price: 80,
        role: 'buyer', // 'buyer' | 'seller'
        avatar: 'https://i.pravatar.cc/100?img=3',
    },
    {
        id: '2',
        name: 'María López',
        tickets: 1,
        price: 75,
        role: 'buyer',
        avatar: 'https://i.pravatar.cc/100?img=5',
    },
];

export default function EventDetailScreen() {
    const route = useRoute<any>();
    const { event } = route.params;

    return (
        <SafeAreaView edges={['top']} style={theme.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />
                <View style={styles.container}>
                    <Image
                        source={{ uri: event.image }} style={styles.image}
                    />
                    <Text style={[theme.title, styles.title]}>
                        {event.title}
                    </Text>
                    <Text style={[theme.text, styles.subtitle]}>
                        {event.date} - {event.location}
                    </Text>
                    <View style={[styles.btnCtnr]}>
                        <AppButton
                            label="COMPRAR | S/. 80"
                            type="green"
                            onPress={() => console.log('Confirmar')}
                        />
                        <AppButton
                            label="VENDER | S/. 80"
                            type="purple"
                            onPress={() => console.log('Confirmar')}
                        />
                    </View>
                    <AppTabs tabs={['TICKETS DISPONIBLES', 'COMPRADORES']}>
                        <AppTab name="TICKETS DISPONIBLES">
                            {traders.map(trader => (
                                <TraderCard
                                    key={trader.id}
                                    name={trader.name}
                                    tickets={trader.tickets}
                                    price={trader.price}
                                    role={trader.role}
                                    avatar={trader.avatar}
                                    onPress={() => console.log(trader.name)}
                                />
                            ))}
                        </AppTab>

                        <AppTab name="COMPRADORES">
                            {traders2.map(trader => (
                                <TraderCard
                                    key={trader.id}
                                    name={trader.name}
                                    tickets={trader.tickets}
                                    price={trader.price}
                                    role={trader.role}
                                    avatar={trader.avatar}
                                    onPress={() => console.log(trader.name)}
                                />
                            ))}
                        </AppTab>
                    </AppTabs>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    image: {
        width: '100%',
        height: 240,
        borderRadius: 12,
    },
    title: {
        color: colors.white,
        marginTop: 12
    },
    subtitle: {
        marginTop: 8
    },
    btnCtnr: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        paddingVertical: 26,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        marginBottom: 22
    },

});
