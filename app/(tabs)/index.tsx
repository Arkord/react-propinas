import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Home ()  {
  
  const [amount, setAmount] = useState("")
  const [percent, setPercent] = useState("")

  const showAlert = (viewId: string)  => { Alert.alert('Calculadora', 'Button pressed ' + viewId); }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('porcentaje');
      if (value != null) {
        setPercent(value);
      }
      else {
        setPercent('15')
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }), [];

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de propinas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Monto"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={setAmount}
          value={amount}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Porcentaje"
          underlineColorAndroid="transparent"
          onChangeText={setPercent}
          value={percent}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.calcularButton]}
        onPress={() => showAlert('calcular')}>
        <Text style={styles.loginText}>Calcular</Text>
      </TouchableOpacity>

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  header: {
    margin: 15,
    fontSize: 24
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    paddingHorizontal: 6,
    height: 45,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
  },
  calcularButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
})
