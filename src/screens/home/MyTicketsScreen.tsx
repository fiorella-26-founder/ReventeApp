import { Text } from 'react-native';
import { theme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyTicketsScreen() {
    return (
        <SafeAreaView style={theme.screen}>
            <Text>Welcome to my tickets!</Text>
        </SafeAreaView>
    );
}
