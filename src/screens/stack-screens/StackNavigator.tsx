import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import EmailLoginScreen from './EmailLoginScreen';
import EmailSignUpScreen from './EmailSignUpScreen';
import OnboardingScreen from './OnboardingScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const OnboardingTitle = props => {
    return <Text>Onboarding</Text>
}

export default function StackNavigator() {
    return (
        <Navigator initialRouteName='WelcomeScreen'>
            <Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name='EmailLoginScreen'
                component={EmailLoginScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name='EmailSignUpScreen'
                component={EmailSignUpScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name='OnboardScreen'
                component={OnboardingScreen}
                options={{
                    headerLeft: () => null,
                    headerTitle: () => (
                        <Text style={{ fontSize: 24 }}>Onboarding</Text>
                    ),
                }}
            />
        </Navigator>
    );
}

const styles = StyleSheet.create({});
