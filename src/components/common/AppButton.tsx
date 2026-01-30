import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type ButtonType = 'green' | 'purple';

interface AppButtonProps {
    label: string;
    type: ButtonType;
    onPress: () => void;
    style?: ViewStyle;
}

export default function AppButton({
    label,
    type,
    onPress,
    style,
}: AppButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.base, styles[type], style]}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        height: 50,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    green: {
        backgroundColor: colors.secondary,
    },

    purple: {
        backgroundColor: colors.primary,
    },

    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});
