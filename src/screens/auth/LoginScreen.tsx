import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';

export default function LoginScreen() {
  return (
    <SafeAreaView edges={['top']} style={theme.screen}>
      <View style={[styles.container]}>
        <Image
          source={require('../../../assets/icons/loginDesi.png')}
          style={[styles.icon]}
          resizeMode="contain"
        />
        <Text style={[theme.loginTitle, styles.title]}>¡BIENVENIDO A ENTRALA🙌!</Text>
        <Text style={[theme.text, styles.subtitle]}>Regístrate o inicia sesión para comprar tus entradas ya!</Text>
        <AppInput placeholder="Celular" />
        <View style={[styles.btnContainer]}>
          <AppButton
            label="INGRESAR"
            type="purple"
            onPress={() => console.log('Confirmar')}
          />
        </View>
      </View>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  icon: {
    width: '70%',
    aspectRatio: 1.3,
  },
  title: {
    color: colors.secondary,
    marginTop: 30
  },
  subtitle: {
    color: colors.white,
    textAlign: 'center',
    marginBottom: 16
  },
  btnContainer: {
    marginTop: 30,
    width: '80%', 
    height: 55 
  },
});
