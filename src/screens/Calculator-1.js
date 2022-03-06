import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Row from '../components/Row'
import Button from "../components/Calculator-1/Button"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'center',
    alignItems : "center"
  },
  container2 : {
    width : "80%"
  },
  container3 : {
    marginBottom : 30
  },
  labelInput : {
    fontSize : 24,
    fontWeight : "400"
  },
  input : {
    height : 50,
    borderRadius : 10,
    backgroundColor : "#FFF",
    fontSize : 24,
    textAlign : "right",
    paddingHorizontal : 10
  },
  result : {
    marginTop : 30,
    height : 50,
    borderRadius : 10,
    backgroundColor : "#FFF",
    fontSize : 38,
    textAlign : "right",
    paddingHorizontal : 10
  }
});

export default function Calculator1() {
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)
  const [result, setResult] = useState(0)

  function handlePlus(){
    setResult(valueA + valueB)
  }
  function handleSubtract(){
    setResult(valueA - valueB)
  }
  function handleMultiply(){
    setResult(valueA * valueB)
  }
  function handleDivide(){
    if(valueA == 0){
      return setResult(0)
    }
    setResult(valueA / valueB)
  }
  function handlePercentage(){
    setResult((valueA/100) * valueB)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <SafeAreaView>
          <View style={styles.container3}>
            <Text style={styles.labelInput}>Value A</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={newValue => setValueA(parseInt(newValue))}
            />  
          </View>
          <View style={styles.container3}>
            <Text style={styles.labelInput}>Value B</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input} 
              onChangeText={newValue => setValueB(parseInt(newValue))}  
            />  
          </View>
          <Text>Put the percentage on Value A</Text>
          <Row>
            <Button 
              text="+"
              onPress={handlePlus}
            />
            <Button 
              text="-"
              onPress={handleSubtract}
            />
            <Button 
              text="x"
              onPress={handleMultiply}
            />
          </Row>
          <Row>
            <Button 
              text="/"
              onPress={handleDivide}
            />
            <Button 
              text="%"
              onPress={handlePercentage}
            />
          </Row>
          <Text style={styles.result}>
            {parseFloat(result).toLocaleString()}
          </Text>
        </SafeAreaView>
      </View>
    </View>
  );
}