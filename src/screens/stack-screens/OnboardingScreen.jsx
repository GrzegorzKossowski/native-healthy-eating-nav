import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import BackgroundMainScreen from './BackgroundMainScreen';
import COLORS from '../../styles/colors';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function OnboardingScreen() {
    const { auth, setAuth } = useAuth();
    const [dateWake, setWakeDate] = useState(new Date());
    const [dateSleep, setSleepDate] = useState(new Date());
    const [showWakeUp, setShowWakeUp] = useState(false);
    const [showGoSleep, setSetGoSleep] = useState(false);

    const handleGoApp = () => {
        setAuth(prev => {
            return {
                ...prev,
                token: '9s8df7s98f9',
                dateWake,
                dateSleep
            };
        });
    };

    const onWakeChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowWakeUp(false);
        setWakeDate(currentDate);
    };
    const onSleepChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setSetGoSleep(false);
        setSleepDate(currentDate);
    };

    return (
        <BackgroundMainScreen>
            <View style={[styles.container, styles.center]}>
                <View style={styles.formContainer}>
                    <Button
                        icon={'alarm'}
                        mode='elevated'
                        onPress={() => setShowWakeUp(true)}
                        contentStyle={styles.button}
                        buttonColor={COLORS.primaryDark}
                        textColor={COLORS.white}
                    >
                        When do you wake up?
                    </Button>
                    {dateWake && (
                        <Text>
                            {dateWake.getHours()} {dateWake.getMinutes()}
                        </Text>
                    )}
                    <Button
                        icon={'bed'}
                        mode='elevated'
                        onPress={() => setSetGoSleep(true)}
                        contentStyle={styles.button}
                        buttonColor={COLORS.primaryDark}
                        textColor={COLORS.white}
                    >
                        When do go to sleep?
                    </Button>
                    {dateSleep && (
                        <Text>
                            {dateSleep.getHours()} {dateSleep.getMinutes()}
                        </Text>
                    )}

                    {showWakeUp && (
                        <DateTimePicker
                            testID='wakeUpTimePicker'
                            value={dateWake}
                            mode='time'
                            is24Hour={true}
                            onChange={onWakeChange}
                        />
                    )}
                    {showGoSleep && (
                        <DateTimePicker
                            testID='sleepTimePicker'
                            value={dateSleep}
                            mode='time'
                            is24Hour={true}
                            onChange={onSleepChange}
                        />
                    )}
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        icon={'hamburger'}
                        mode='elevated'
                        onPress={handleGoApp}
                        contentStyle={styles.button}
                        buttonColor={COLORS.accent}
                        textColor={COLORS.white}
                    >
                        Let's Get Healthy!
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
