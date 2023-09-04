import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Calculator() {

    const [digitos, setDigitos] = useState(String);
    const [resolucao, setResolucao] = useState('')

    function press(value) {

        setDigitos(digitos + value)
    }

    function clear() {
        setDigitos('')
        setResolucao('')
    }

    function calcular() {

        setResolucao(digitos);
        setDigitos(eval(digitos));

    }
    function operation (value) {
        var operacao = digitos[digitos.length -1];
        if ((operacao == '+') || (operacao == '-') || (operacao == '*') || (operacao == '/')){
            var alOp = digitos.substring(0, (digitos.length -1)) + value;
            setDigitos('');
            setDigitos(alOp);
        }
        else{
            setDigitos(digitos + value);
        }

    }
    function limpe (){
        digAnt = digitos.substring(0, digitos.length -1);
        setDigitos('');
        setDigitos(digAnt);
    }




    return (
        <LinearGradient style={styles.container} colors={['#3A1B59', '#D93D66']}>

            <SafeAreaView>

                <StatusBar style="light" />

                <View>
                    <Text style={styles.title}>Calculadora</Text>
                </View>
                <View style={styles.display}>
                    <Text style={styles.resolucao}>{resolucao}</Text>
                    <View style={styles.digitando}>
                        <Text style={styles.igualdade}>=</Text>
                        <Text style={styles.digitos}>{digitos}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnc} onPress={() => clear()}><Text style={styles.txtbtn}>CE</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnc} onPress={() => clear()}><Text style={styles.txtbtn}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnc} onPress={() => limpe()}><Text style={styles.txtbtn}>L</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnf} onPress={() => operation('/')}><Text style={styles.txtbtn}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('7')}><Text style={styles.txtbtn}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('8')}><Text style={styles.txtbtn}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('9')}><Text style={styles.txtbtn}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnf} onPress={() => operation('*')}><Text style={styles.txtbtn}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('4')}><Text style={styles.txtbtn}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('5')}><Text style={styles.txtbtn}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('6')}><Text style={styles.txtbtn}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnf} onPress={() => operation('-')}><Text style={styles.txtbtn}>-</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('1')}><Text style={styles.txtbtn}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('2')}><Text style={styles.txtbtn}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('3')}><Text style={styles.txtbtn}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnf} onPress={() => operation('+')}><Text style={styles.txtbtn}>+</Text></TouchableOpacity>
                </View>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btne}><Text style={styles.txtbtn}>+/-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnd} onPress={() => press('0')}><Text style={styles.txtbtn}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btne} onPress={() => press('.')}><Text style={styles.txtbtn}>,</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnf} onPress={() => calcular()}><Text style={styles.txtbtn}>=</Text></TouchableOpacity>
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
        marginTop: 67,
        fontSize: 32,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    display: {
        marginTop: 60,
        margin: 4,
        height: 135,
        paddingTop: 19,
        padding: 10,
        backgroundColor: 'rgba(255, 225, 255, 0.4)',
        alignItems: 'flex-end',
    },
    resolucao: {
        fontSize: 24,
        color: '#fff',
    },
    digitando: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#fff',
        justifyContent: 'space-between',
        width: '100%',
    },
    digitos: {
        fontSize: 48,
        color: '#fff',
    },
    igualdade: {
        fontSize: 48,
        color: '#fff',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,

    },
    btnc: {
        width: '20%',
        height: 80,
        marginTop: 4,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btnf: {
        width: '20%',
        height: 80,
        marginTop: 4,
        backgroundColor: 'rgba(60, 179, 113, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btnd: {
        width: '20%',
        height: 80,
        marginTop: 4,
        backgroundColor: 'rgba(180, 180, 180, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btne: {
        width: '20%',
        height: 80,
        marginTop: 4,
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    txtbtn: {
        fontSize: 25,
        color: '#fff',

    },

});
