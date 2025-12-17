import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import TopBar from '../../components/layout/TopBar';
import AppInput from '../../components/common/AppInput';
import AppCarousel from '../../components/common/Carousel';
import HomeEventCard from '../../components/layout/HomeEventCard';
import { colors } from '../../theme/colors';


const trendingEvents = [
  {
    id: '1',
    image: 'https://cdn.teleticket.com.pe/especiales/coldplay2022/images/liv005_rs.jpg',
    title: 'Coldplay en Lima',
  },
  {
    id: '2',
    image: 'https://entradasbadbunnyperu.com/img/banner-home.webp',
    title: 'Bad Bunny World Tour',
  },
];

const cityEvents = [
  {
    id: '1',
    title: 'Coldplay en Lima',
    image: 'https://cdn.teleticket.com.pe/especiales/coldplay2022/images/liv005_rs.jpg',
    date: '20 Oct 2025',
    location: 'Estadio Nacional',
  },
  {
    id: '2',
    title: 'Bad Bunny World Tour',
    image: 'https://entradasbadbunnyperu.com/img/banner-home.webp',
    date: '05 Nov 2025',
    location: 'Estadio San Marcos',
  },
  {
    id: '3',
    title: 'Karol G – Mañana Será Bonito',
    image: 'https://cdn.teleticket.com.pe/especiales/karolg2024/images/banner.jpg',
    date: '12 Dic 2025',
    location: 'Arena Lima',
  },
];


export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={theme.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TopBar />
        <Text style={[theme.title, styles.title]}>
          Consigue tus tickets
        </Text>
        <Text style={[theme.text, styles.subtitle]}>
          Rápido, seguro y desde cualquier lugar
        </Text>
        <AppInput
          search
          placeholder="Buscar eventos, artistas o lugares"
        />
        <View style={styles.container}>
          <Text style={[theme.textSemibold, styles.trendingTxt]}>
            Eventos más buscados 🔥
          </Text>
          <AppCarousel
            data={trendingEvents}
            onPress={(item) => console.log(item.title)}
          />
        </View>
        <View style={styles.container}>
          <Text style={[theme.textSemibold, styles.trendingTxt]}>
            Eventos en tu ciudad
          </Text>
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
    color: colors.primary,
  },
  subtitle: {
    marginBottom: 8,
  },
  container: {
    marginTop: 24,
  },
  trendingTxt: {
    marginBottom: 8,
  },
});

