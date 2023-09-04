import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';

import Navbar from '../../components/Navbar';

export default function Temperature() {

    const [cel, setGrausC] = useState('');
    const [kel, setKelvin] = useState('');
    const [fah, setGrausF] = useState('');

    function converterTemperatura() {

        var celsius = parseFloat(cel);
        var kelv = celsius + 273.15;
        var fa = (celsius * (9 / 5)) + 32;
        
        setKelvin(String(kelv));
        setGrausF(String(fa));

    }

    return (
        <LinearGradient style={styles.container} colors={['#3A1B59', '#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <ScrollView style={{ paddingHorizontal: 32 }}>

                    <Text style={styles.title}>CONVERSOR DE TEMPERATURA</Text>

                    <View style={{marginTop: 65,}}>

                    <View style={styles.linhas}>
                        <Text style={styles.medida}>Kº</Text>
                        <TextInput style={styles.input} editable={false} value={kel} />
                    </View>

                    <View style={styles.linhas}>
                        <Text style={styles.medida}>Cº</Text>
                        <TextInput style={styles.input} onChangeText={(value) => setGrausC(value)} value={cel}/>
                        
                    </View>

                    <View style={styles.linhas}>
                        <Text style={styles.medida}>Fº</Text>
                        <TextInput style={styles.input} editable={false} value={fah} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => converterTemperatura()}>
                        <Text style={{ color: '#000', textAlign: 'center' }}>Converter</Text>
                    </TouchableOpacity>

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
    button: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 30,
    },
    linhas: {
        flexDirection: 'row',
        marginTop: 16,
        textAlign: 'center',
        padding: 5,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        justifyContent: 'center',
    },
    medida: {
        fontSize: 25,
        color: '#fff',
    },
    input: {
        marginLeft: 15,
        justifyContent: 'flex-end',
        width: "50%",
        fontSize: 24, 
        color: "#fff",
        
    },

})