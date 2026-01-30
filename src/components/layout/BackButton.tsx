import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
            <Image
                source={require('../../../assets/icons/back.png')} style={styles.icon}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    icon: {
        width: 20,
        height: 20
    }
});
