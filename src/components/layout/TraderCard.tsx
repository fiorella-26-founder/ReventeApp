import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../theme/colors';


interface TraderCardProps {
  name: string;
  tickets: number;
  price: number;
  role: string;
  avatar: string;
  onPress?: () => void;
}

export default function TraderCard({
  name,
  tickets,
  price,
  role,
  avatar,
  onPress,
}: TraderCardProps) {
  const isSeller = role === 'seller';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        isSeller ? styles.seller : styles.buyer,
      ]}
    >
      {/* Left */}
      <View style={styles.left}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>
            {tickets} ticket{tickets > 1 ? 's' : ''}{' '}
            {isSeller ? 'en venta' : 'buscado'}
          </Text>
        </View>
      </View>

      {/* Right */}
      <View style={styles.right}>
        <Text style={styles.price}>S/. {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  seller: {
    backgroundColor: '#19271eff',
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },

  buyer: {
    backgroundColor: '#241E2F',
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  name: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },

  subtitle: {
    color: colors.lightGray,
    fontSize: 13,
    marginTop: 2,
  },

  right: {
    alignItems: 'flex-end',
  },

  price: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
