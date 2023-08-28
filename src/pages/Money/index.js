import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import Navbar from '../../components/Navbar';

export default function Money() {

    const [ selectedValue, setSelectedValue ] = useState('brl');
    
    return(
        <LinearGradient style={styles.container} colors={['#3A1B59','#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <ScrollView style={{paddingHorizontal: 32}}>

                    <Text style={styles.title}>CONVERSOR DE MOEDAS</Text>

                    <View style={styles.topInput}>

                        <View style={styles.picker}>
                            <Picker style={{color: '#fff'}} selectedValue={selectedValue} onValueChange={(value) => {setSelectedValue(value)}}>
                                <Picker.Item label="USD" value="usd" />
                                <Picker.Item label="BRL" value="brl" />
                            </Picker>
                        </View>

                        <View>
                            <Text>120</Text>
                        </View>

                    </View>

                </ScrollView>

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
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 64,
        fontWeight: '600'
    },

    picker: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8
    },

    topInput: {
        marginTop: 32
    },
});