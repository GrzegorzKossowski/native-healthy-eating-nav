import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import colors from '../../styles/colors';

export default function HomeTab() {
    const now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return (
        <View style={styles.container}>
            <View style={[styles.clockContainer, styles.centered]}>
                <Text variant='headlineMedium'>Your next meal is at</Text>
                <Text variant='displayLarge'>
                    {hours}:{minutes}
                </Text>
            </View>
            <View style={styles.centered}>
                <Text variant='headlineSmall'>Meal Suggestions</Text>
                <Text variant='bodyMedium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, sequi! Incidunt vel accusamus est modi. Eos
                    fugit asperiores doloremque corrupti vero dolorum.
                </Text>
            </View>
            <Button
                mode='elevated'
                onPress={() => console.log('Pressed')}
                buttonColor={colors.primaryLight}
                textColor={colors.textPrimary}
            >
                Did you know?
            </Button>
            <View style={[styles.btnContainer]}>
                <Button
                    mode='elevated'
                    onPress={() => console.log('Pressed')}
                    buttonColor={colors.primaryLight}
                    textColor={colors.textPrimary}
                    style={styles.btn}
                >
                    I'm Hungry'
                </Button>
                <Button
                    mode='elevated'
                    onPress={() => console.log('Pressed')}
                    buttonColor={colors.accent}
                    textColor={colors.white}
                    style={styles.btn}
                >
                    Just Ate
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    clockContainer: {
        flex: 2,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
    },
    btn: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
    },
});
