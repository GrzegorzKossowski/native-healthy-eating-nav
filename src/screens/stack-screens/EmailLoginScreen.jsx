import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import BackgroundMainScreen from './BackgroundMainScreen';
import COLORS from '../../styles/colors';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function EmailLoginScreen({ navigation }) {
    const { auth, setAuth } = useAuth();
    const [email, setEmail] = useState('john@doe.com');
    const [password, setPassword] = useState('123456');

    const handleLogin = () => {
        setAuth({
            email,
            firstName: 'John',
            lastName: 'Doe',
            token: 'ee454e543ed5f43af4',
        });
    };

    return (
        <BackgroundMainScreen>
            <View style={[styles.container, styles.center]}>
                <View style={styles.formContainer}>
                    <TextInput
                        value={email}
                        label={'Email'}
                        onChangeText={e => setEmail(e)}
                    />
                    <TextInput
                        value={password}
                        label={'Password'}
                        secureTextEntry={true}
                        onChangeText={e => setPassword(e)}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        icon={'login'}
                        mode='elevated'
                        onPress={handleLogin}
                        contentStyle={styles.button}
                        buttonColor={COLORS.accent}
                        textColor={COLORS.white}
                    >
                        Sign In
                    </Button>
                </View>
                <View style={styles.signUpContainer}>
                    <Text>No account?</Text>
                    <Button
                        mode='text'
                        onPress={() => navigation.navigate('EmailSignUpScreen')}
                    >
                        Sign Up
                    </Button>
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
    formContainer: {
        width: 300,
        gap: 10,
        marginBottom: 30,
    },
    buttonsContainer: {
        width: 300,
        marginBottom: 20,
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        fontSize: 32,
    },
});
