import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function EatMenuTab() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>EatMenuTab</Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
  }
});
