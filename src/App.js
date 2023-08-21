import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Navbar from './components/Navbar';

export default function App() {
    return (

        <LinearGradient style={styles.container} colors={['#A62A5C','#6A2597']}>

            <SafeAreaView style={styles.container}>

                <StatusBar style="auto" />

            </SafeAreaView>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 32
    },
});
