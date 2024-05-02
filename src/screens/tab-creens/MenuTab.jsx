import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function MenuTab() {
    return (
        <View style={styles.container}>
            <Text>MenuTab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {},
});
