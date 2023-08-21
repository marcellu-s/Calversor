import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import Navbar from '../../components/Navbar';

export default function Home() {

    return (
        <LinearGradient style={styles.container} colors={['#3A1B59','#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <View style={styles.center}>
                    <Text style={styles.title}>Calversor</Text>
                </View>

            </SafeAreaView>

            <Navbar />

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    center: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 32,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
