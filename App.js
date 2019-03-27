/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let b = 0; b < 3; b++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][b]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let operations = ['+', '-', '*', '/']
    let ops = []
    for (let j = 0; j < 4; j++) {
      ops.push(
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{operations[j]}</Text>
        </TouchableOpacity>
      )
    }


    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 20,
    color: "black"
  },
  btnText: {
    fontSize: 30
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white"
  },
  calculationText: {
    fontSize: 15,
    color: "white"
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculation: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "black"
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "olive"
  }
});
