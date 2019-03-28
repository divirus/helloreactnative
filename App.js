/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.operations = ['C', '+', '-', '*', '/']
  }

  calculateResult() {
    // eval is used only for test
    this.setState({
      calculationText: eval(this.state.resultText)
    })
  }

  validateInput() {
    const text = this.state.resultText
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '/':
      case '*':
        return false
    }
    return true
  }

  buttonPressed(text) {
    if (text == '=') {
      return this.validateInput() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate(operation) {
    switch (operation) {
      case 'C':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '*':
      case '+':
      case '-':
      case '/':
        const lastChar = this.state.resultText.split('').pop()

        if(this.operations.indexOf(lastChar) > 0) return

        if(this.state.text == '') return
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let b = 0; b < 3; b++) {
        row.push(
          <TouchableOpacity key={nums[i][b]} style={styles.btn} onPress={() => this.buttonPressed(nums[i][b])}>
            <Text style={styles.btnText}>{nums[i][b]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let ops = []
    for (let j = 0; j < 5; j++) {
      ops.push(
        <TouchableOpacity key={this.operations[j]} style={styles.btn} onPress={() => this.operate(this.operations[j])}>
          <Text style={styles.btnText}>{this.operations[j]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 40,
    color: 'black'
  },
  btnText: {
    fontSize: 35
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  calculationText: {
    fontSize: 20,
    color: '#ffffff'
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  result: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#ffffff'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#808080'
  }
})
