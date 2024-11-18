import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


type Props = {
    label: string;
    icon?: React.ComponentProps<typeof FontAwesome>['name'];
    warna: string;
};

export default function ButtonBulat({ label, icon, warna }: Props) {
    return (
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <View style={[styles.buttonContainer, {backgroundColor: warna}]}>
                <FontAwesome name={icon} size={32} color="#fff" style={styles.buttonIcon} />
            </View>
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 70,
        height: 70,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 11,
        marginTop: 3,
    },
    buttonIcon: {
        // paddingRight: 8,
    },
});