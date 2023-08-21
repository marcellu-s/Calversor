import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import Navbar from '../../components/Navbar';

export default function Calculator() {
    
    return(
        <LinearGradient style={styles.container} colors={['#3A1B59','#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <View>
                    <Text>Calculadora</Text>
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

    title: {
        fontSize: 32,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
