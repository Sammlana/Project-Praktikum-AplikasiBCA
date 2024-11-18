import { Text, View, StyleSheet } from 'react-native';
import ButtonBulat from '@/components/CIrcleButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function indexScreen() {
    return (
      <View style={styles.containerUtama}>
        <View style={styles.container3}>
            <Text style={styles.text1}>Selamat datang,</Text>
            <Text style={styles.text2}>HISYAM ALIFIAN MAULANA</Text>
        </View>
        <View style={styles.container}>
            <ButtonBulat label="m-Info" icon="bank" warna={'dodgerblue'} />
            <ButtonBulat label="m-Transfer" icon="send" warna={'dodgerblue'} />
            <ButtonBulat label="m-Payment" icon="money" warna={'dodgerblue'} />
            <ButtonBulat label="m-Commerce" icon="shopping-cart" warna={'dodgerblue'} />
        </View>
        <View style={styles.container}>
            <ButtonBulat label="Cardless" icon="mobile" warna={'dodgerblue'} />
            <ButtonBulat label="m-Admin" icon="user" warna={'dodgerblue'} />
            <ButtonBulat label="BCA Keyboard" icon="keyboard-o" warna={'dodgerblue'} />
            <ButtonBulat label="Flazz" icon="credit-card" warna={'dodgerblue'} />
        </View>
        <View style={styles.container2}>
            <ButtonBulat label="BagiBagi" icon="gift" warna={'dodgerblue'} />
            <ButtonBulat label="Lifestyle" icon="gamepad" warna={'dodgerblue'} />
        </View>
      </View>
        
    );
}

const styles = StyleSheet.create({
  containerUtama: {
      flex: 1,
      backgroundColor: '#002B5B',
      paddingHorizontal: 10,
      paddingTop: 20,
  },
  container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 10,
  },
  container2: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 19,
      marginVertical: 10,
      gap:20
  },
  container3: {
      paddingHorizontal: 20,
      marginTop: 10,
      marginBottom: 20,
  },
  text1: {
      color: '#ffffff',
      fontSize: 14,
      fontWeight: '400',
  },
  text2: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: '700',
  },
});
