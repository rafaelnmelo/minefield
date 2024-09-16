import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import params from './src/params'
import { creatMinedBoard } from './src/functions'
import MineField from './src/components/MineField'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultlevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: creatMinedBoard(rows, cols, this.minesAmount())
    }
  }

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
        <SafeAreaView style={styles.board}>
          <MineField board={this.state.board} />
        </SafeAreaView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
