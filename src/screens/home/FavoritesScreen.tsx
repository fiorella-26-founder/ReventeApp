import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import TopBar from '../../components/layout/TopBar';
import HomeEventCard from '../../components/layout/HomeEventCard';

const cityEvents = [
  {
    id: '1',
    title: 'Coldplay en Lima',
    image: 'https://cdn.teleticket.com.pe/especiales/coldplay2022/images/liv005_rs.jpg',
    date: '20 Oct 2025',
    location: 'Estadio Nacional',
    price: 'DESDE S/. 570'
  },
  {
    id: '2',
    title: 'Bad Bunny World Tour',
    image: 'https://entradasbadbunnyperu.com/img/banner-home.webp',
    date: '05 Nov 2025',
    location: 'Estadio San Marcos',
    price: 'DESDE S/. 570'

  },
  {
    id: '3',
    title: 'Karol G – Mañana Será Bonito',
    image: 'https://cdn.teleticket.com.pe/especiales/karol-g-en-lima-2024/images/ven039_rs.jpg',
    date: '12 Dic 2025',
    location: 'Arena Lima',
    price: 'DESDE S/. 570'
  },
  {
    id: '4',
    title: 'Coldplay en Lima',
    image: 'https://cdn.teleticket.com.pe/especiales/coldplay2022/images/liv005_rs.jpg',
    date: '20 Oct 2025',
    location: 'Estadio Nacional',
    price: 'DESDE S/. 570'
  },
  {
    id: '5',
    title: 'Bad Bunny World Tour',
    image: 'https://entradasbadbunnyperu.com/img/banner-home.webp',
    date: '05 Nov 2025',
    location: 'Estadio San Marcos',
    price: 'DESDE S/. 570'

  },
  {
    id: '6',
    title: 'Karol G – Mañana Será Bonito',
    image: 'https://cdn.teleticket.com.pe/especiales/karol-g-en-lima-2024/images/ven039_rs.jpg',
    date: '12 Dic 2025',
    location: 'Arena Lima',
    price: 'DESDE S/. 570'
  },
];

export default function Favoritescreen() {
  return (
    <SafeAreaView edges={['top']} style={theme.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TopBar />
        <Text style={[theme.title, styles.title]}>Tus eventos favoritos</Text>
        <View style={styles.container}>
          {cityEvents.map(event => (
            <HomeEventCard
              key={event.id}
              item={event}
              onPress={() => console.log(event.title)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
  },
  title: {
    color: colors.white,
  },
  container: {
    marginTop: 20,
  },
});