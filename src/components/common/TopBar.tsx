/* eslint-disable react-native/no-inline-styles */
// src/components/TopBar.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { colors } from '../../theme/colors';
import { theme } from '../../theme/theme';

export default function TopBar() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.burger}>
        <Text style={styles.burgerText}>☰</Text>
      </TouchableOpacity>

      <Text style={theme.text}>Revente</Text>

      {/* Spacer para centrar el título */}
      <View style={{ width: 32 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  burger: {
    padding: 8,
  },
  burgerText: {
    fontSize: 22,
    color: colors.text,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
});
