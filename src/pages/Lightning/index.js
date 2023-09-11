import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import converter from '../../services';

export default function Lightning() {
  const [opcao, setOpcao] = useState('V');
  const [unidade, setUnidade] = useState('OHM');
  const [unidade1, setUnidade1] = useState('A');
  const [resultado, setResultado] = useState('...');
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  useEffect(() => {
    if (opcao == 'OHM') {
      setUnidade('V');
      setUnidade1('A');
    } else if (opcao == 'A') {
      setUnidade('V');
      setUnidade1('OHM');
    } else if (opcao == 'T') {
      setUnidade('OHM');
      setUnidade1('A');
    }
    setValue1('');
    setValue2('');
    setResultado('...');
  }, [opcao]);

  function press() {
    if (opcao == 'OHM') {
      let res = Number(value1) / Number(value2);
      setResultado(res);
    } else if (opcao == 'A') {
      let res = Number(value1) / Number(value2);
      setResultado(res);
    } else if (opcao == 'V') {
      let res = Number(value1) * Number(value2);
      setResultado(res);
    }
  }

  return (
    <LinearGradient style={styles.container} colors={['#3A1B59', '#D93D66']}>
      <SafeAreaView>
        <StatusBar style="light" />

        <ScrollView style={{ paddingHorizontal: 32 }}>
          <Text style={styles.title}>1° LEI DE OHM</Text>

          <View style={styles.corpo}>
            <View style={styles.picker}>
              <Picker
                style={{ color: '#000' }}
                selectedValue={opcao}
                onValueChange={(op) => setOpcao(op)}>
                <Picker.Item label="Tensão" value="T" />
                <Picker.Item label="Resistência" value="OHM" />
                <Picker.Item label="Corrente" value="A" />
              </Picker>
            </View>

            <View style={styles.inputValue}>
              <Text style={{ color: '#fff', fontSize: 28 }}>
                {unidade}:{' '}
                <TextInput
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    borderBottomWidth: 1,
                    borderBottomColor: '#fff',
                  }}
                  onChangeText={(value) => setValue1(value)}
                  value={value1}
                  placeholder="..."
                  placeholderTextColor={'#999'}
                  keyboardType="numeric"
                />
              </Text>
            </View>

            <View style={styles.inputValue}>
              <Text style={{ color: '#fff', fontSize: 28 }}>
                {unidade1}:{' '}
                <TextInput
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    borderBottomWidth: 1,
                    borderBottomColor: '#fff',
                  }}
                  onChangeText={(value) => setValue2(value)}
                  value={value2}
                  placeholder="..."
                  placeholderTextColor={'#999'}
                  keyboardType="numeric"
                />
              </Text>
            </View>

            <View style={styles.outputValue}>
              <Text style={{ color: '#fff', fontSize: 32 }}>
                {opcao}: {resultado}
              </Text>
            </View>

            <View style={{ marginTop: 32 }}>
              <TouchableOpacity style={styles.button} onPress={() => press()}>
                <Text style={{ color: '#000', textAlign: 'center' }}>
                  Calcular
                </Text>
              </TouchableOpacity>
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
    fontWeight: '600',
  },
  corpo: {
    marginTop: 50,
  },
  picker: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    width: '45%',
  },
  inputValue: {
    flexDirection: 'row',
    marginTop: 24,
  },
  outputValue: {
    flexDirection: 'row',
    marginTop: 24,
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
