import { Text } from 'react-native';
import { theme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favoritescreen() {
  return (
    <SafeAreaView style={theme.screen}>
      <Text style={theme.text}>Welcome to my favoritesss!</Text>
    </SafeAreaView>
  );
}
