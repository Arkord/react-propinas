import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Configuration ()  {
  
  const [percent, setPercent] = useState("")

  const showAlert = (viewId: string)  => { 
    Alert.alert('Calculadora', 'Se ha guardado el porcentaje ' + viewId); 
    storeData(percent);
  }

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('porcentaje', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración</Text>
     
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Porcentaje"
          underlineColorAndroid="transparent"
          onChangeText={setPercent}
          value={percent}
          keyboardType='numeric'
          returnKeyType='done'
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.calcularButton]}
        onPress={() => showAlert('')}>
        <Text style={styles.loginText}>Guardar</Text>
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
