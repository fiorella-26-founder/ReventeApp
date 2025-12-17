import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { colors } from '../../theme/colors';

interface AppInputProps extends TextInputProps {
  search?: boolean;
}

export default function AppInput({ search, style, ...props }: AppInputProps) {
  return (
    <View style={styles.container}>
      {search && (
        <Image
          source={require('../../../assets/icons/search.png')}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={colors.background}
        style={[
          styles.input,
          search && styles.inputWithIcon,
          style,
        ]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },

  icon: {
    width: 20,
    height: 20,
    tintColor: colors.background,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: colors.darkText,
  },

  inputWithIcon: {
    marginLeft: 8,
  },
});
