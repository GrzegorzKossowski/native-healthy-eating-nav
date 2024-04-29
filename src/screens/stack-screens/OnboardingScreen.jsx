import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import BackgroundMainScreen from './BackgroundMainScreen';
import COLORS from '../../styles/colors';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function OnboardingScreen() {
    const { auth, setAuth } = useAuth();
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john@doe.com');
    const [password, setPassword] = useState('123456');

    const handleLogin = () => {
        setAuth(prev => {
            return {
                firstName,
                lastName,
                email,
                password,
            };
        });
        navigation.navigate('OnboardScreen');
    };

    return (
        <BackgroundMainScreen>
            <View style={[styles.container, styles.center]}>
                <View style={styles.formContainer}>
                    <TextInput
                        value={firstName}
                        label={'First name'}
                        onChangeText={e => setFirstName(e)}
                    />
                    <TextInput
                        value={lastName}
                        label={'Last name'}
                        onChangeText={e => setLastName(e)}
                    />
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
                        Sign Up
                    </Button>
                </View>
                <View style={styles.signUpContainer}>
                    <Text>You already have an account?</Text>
                    <Button
                        mode='text'
                        onPress={() => navigation.navigate('EmailLoginScreen')}
                    >
                        Sign In
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
