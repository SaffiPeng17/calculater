/**
 * First Page of React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from 'react-native';

import Button from 'apsl-react-native-button';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formulaarray: [],
      countnumber: '0',

      disptext: '0',
      realnumber: 0,
      result: 0,
    }
  }

  onPressed(input) {
    console.log('Pressed!');
    //
    // if(typeof input == "number") {
    //   countnumber = countnumber+String(input);
    // } else {
    //   realnumber = parseInt(countnumber, 10);
    //   countnumber = '0';
    // }
    var newText = this.state.countnumber;
    if(newText == '0') {
      newText = input;
    } else {
      newText = newText+input;
    }

    // switch (input) {
    //   case '=':
    //     var sum = 0;
    //     for(var i = 0; i<=formulaarray.length; i++) {
    //       if(i%2! != 0) {
    //
    //       }
    //       let number = Number(formulaarray[i]);
    //       sum = sum+number;
    //     }
    //     break;
    //   case '+', '-', '*', '/':
    //     formulaarray.push(countnumber);
    //     formulaarray.push(input);
    //     countnumber = '0';
    //     break;
    //   default: //numbers
    //
    //     break;
    // }
    //
    // var newText = this.state.formulaarray.toString();
    // // newText = (newText == '0') ? input : newText+input;
    this.setState({countnumber: newText, disptext: newText});
  }

  onPlusPressed() {
    //計算更新
    let number = Number(this.state.countnumber);
    let sum = this.state.result+number;
    this.setState({result: sum});
    //顯示更新
    var newText = this.state.disptext+'+';
    this.setState({countnumber: '0', disptext: newText});

    // formulaarray.push(countnumber);
    // formulaarray.push(input);
    // countnumber = '0';
  }
  onMinusPressed() {

  }
  onTimesPressed() {

  }
  onDividedbyPressed() {

  }
  onEqualPressed() {

  }

  render() {
    const { disptext, result } = this.state;

    return (
        <ImageBackground source={require('../calculator/images/bg_image.png')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.bgmask}></View>
            <View style={styles.textRawGroup}>
              <Text style={styles.formula}>{disptext}</Text>
              <Text style={styles.result}>{result}</Text>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('1')}>1</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('2')}>2</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('3')}>3</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onPlusPressed()}>+</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('4')}>4</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('5')}>5</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('6')}>6</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onMinusPressed()}>-</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('7')}>7</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('8')}>8</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('9')}>9</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onTimesPressed()}>x</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.zerobutton} onPress={() => this.onPressed('0')}>0</Button>
              <Button style={styles.numberbutton} onPress={() => this.onEqualPressed()}>=</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onDividedbyPressed()}>/</Button>
            </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,  //image size
    height: null, //image size
  },
  bgmask: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  textRawGroup: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  formula: {
    marginRight: 10,
    height: 50,
    width: 200,
    color: 'black',
    fontSize: 20,
    textShadowColor: 'rgba(248,248,255, 0.4)',
    backgroundColor: 'rgba(248,248,255, 0.4)',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  result: {
    height: 50,
    width: 100,
    color: 'black',
    fontSize: 20,
    textShadowColor: 'rgba(248,248,255, 0.4)',
    backgroundColor: 'rgba(248,248,255, 0.4)',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  buttonRawGroup: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  numberbutton: {
    marginRight: 10,
    height: 60,
    width: 70,
    backgroundColor: '#FF7F50',
    borderWidth: 0,
    borderRadius: 10,
  },
  numberbuttonRE: {
    height: 60,
    width: 70,
    backgroundColor: '#FF7F50',
    borderWidth: 0,
    borderRadius: 10,
  },
  zerobutton: {
    marginRight: 10,
    height: 60,
    width: 150,
    backgroundColor: '#FF7F50',
    borderWidth: 0,
    borderRadius: 10,
  }
});
