import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Iniciando Campo Minado</Text>
        <Text>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})
