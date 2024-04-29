import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../styles/colors';

export default function BackgroundMainScreen({ children }) {
    return (
        <LinearGradient
            colors={[COLORS.primaryLight, COLORS.primaryDark]}
            style={styles.container}
        >
            <ImageBackground
                source={require('../../../assets/chad-montano-GFCYhoRe48-unsplash.jpg')}
                style={styles.container}
                imageStyle={styles.bgrImage}
            >
                {children}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgrImage: {
        opacity: 0.25,
    },
});
