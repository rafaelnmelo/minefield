import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando Campo Minado
        </Text>
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#F%FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5
  }
})
