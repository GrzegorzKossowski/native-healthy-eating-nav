import { View, StyleSheet, Image } from 'react-native';
import COLORS from '../../styles/colors';
import { Button } from 'react-native-paper';
import BackgroundMainScreen from './BackgroundMainScreen';

export default function WelcomeScreen({ navigation, route }) {
    return (
        <BackgroundMainScreen>
            <View style={[styles.container, styles.center]}>
                <View style={[styles.center, { flex: 2 }]}>
                    <Image
                        source={require('../../../assets/burger.png')}
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        icon={'facebook'}
                        mode='elevated'
                        onPress={() => {}}
                        contentStyle={styles.button}
                        buttonColor={COLORS.accent}
                        textColor={COLORS.white}
                        disabled
                    ></Button>
                    <Button
                        icon={'email-outline'}
                        mode='elevated'
                        onPress={() => navigation.navigate('EmailLoginScreen')}
                        contentStyle={styles.button}
                        buttonColor={COLORS.accent}
                        textColor={COLORS.white}
                    ></Button>
                </View>
            </View>
        </BackgroundMainScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 200,
        height: 200,
        marginBottom: 50,
    },
    buttonsContainer: {
        flex: 1,
        width: 300,
        rowGap: 20,
    },
    button: {
        fontSize: 32,
    },
});
