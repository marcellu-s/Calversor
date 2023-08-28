import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import Navbar from '../../components/Navbar';

export default function Money() {

    const [ topSelectedValue, setTopSelectedValue ] = useState('brl');
    const [ bottomSelectedValue, setBottomSelectedValue ] = useState('brl');
    const [ topValue, setTopValue ] = useState('');
    
    return(
        <LinearGradient style={styles.container} colors={['#3A1B59','#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <ScrollView style={{paddingHorizontal: 32}}>

                    <Text style={styles.title}>CONVERSOR DE MOEDAS</Text>

                    <View style={styles.topInput}>

                        <View style={styles.picker}>
                            <Picker style={{color: '#fff'}} selectedValue={topSelectedValue} onValueChange={(value) => {setTopSelectedValue(value)}}>
                                <Picker.Item label="USD" value="usd" />
                                <Picker.Item label="BRL" value="brl" />
                            </Picker>
                        </View>

                        <View>
                            <TextInput style={{color: '#fff', fontSize: 48, borderBottomWidth: 1, borderBottomColor: '#fff', minWidth: '45%'}} onChangeText={(text) => setTopValue(text)} value={topValue} placeholder="..." placeholderTextColor={'#999'} keyboardType="numeric" />
                        </View>

                    </View>

                    <View style={{marginTop: 32}}>

                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: '#000', textAlign: 'center'}}>Converter</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.topInput}>

                        <View style={styles.picker}>
                            <Picker style={{color: '#fff'}} selectedValue={bottomSelectedValue} onValueChange={(value) => {setBottomSelectedValue(value)}}>
                                <Picker.Item label="USD" value="usd" />
                                <Picker.Item label="BRL" value="brl" />
                            </Picker>
                        </View>

                        <View>
                            <TextInput style={{color: '#fff', fontSize: 48, borderBottomWidth: 1, borderBottomColor: '#fff', minWidth: '45%'}} onChangeText={(text) => setTopValue(text)} value={topValue} placeholder="..." placeholderTextColor={'#999'} keyboardType="numeric" />
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
        borderRadius: 8,
        width: '45%'
    },

    topInput: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    button: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
});