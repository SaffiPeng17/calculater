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
      textArray: [],
      countnumber: '',
      sum: 0,
    }
    this.formulaArray = [];
  }

  onPressed(input) {
    console.log('onPressed: '+input);

    let textarray = this.state.textArray;
    let number = this.state.countnumber;
    let result = this.state.sum;
    if(result != 0) { //clear last calculator data
      textarray = [];
      number = '';
      result = 0;
      this.formulaArray = [];
    }

    switch (input) {
      case '=':
      case '+':
      case '-':
      case 'x':
      case '/':
        //Display formula
        if(result == 0 && number) {
          textarray.push(number);
        }
        console.log(textarray[textarray.length-1]);
        if(['+', '-', 'x', '/'].indexOf(textarray[textarray.length-1]) !== -1) {
            console.log(textarray[textarray.length-1]);
            textarray[textarray.length-1] = input;
        } else {
            textarray.push(input);
        }
        // if(textarray[textarray.length-1] == '+' || textarray[textarray.length-1] == '-' ||
        //    textarray[textarray.length-1] == 'x' || textarray[textarray.length-1] == '/') {
        //      textarray[textarray.length-1] = input;
        // } else {
        //      textarray.push(input);
        // }

        //Calculator
        if(this.formulaArray.length < 2) {
          if(result == 0 && number) {
            this.formulaArray.push(number);
          }

          this.formulaArray.push(input);
        } else {  //this.formulaArray.length >= 2
          result = this.calculator(Number(number));
          if(result == 0 && number) {
            this.formulaArray[0] = result.toString();
          }

          this.formulaArray[1] = input;
        }
        console.log('this.formulaArray = '+this.formulaArray);
        number = '';
        result = (input == '=') ? result : 0;
        break;

      default: //numbers
        console.log('number: '+input);
        if(number.length < 10) {
          number = number+input;
        }
        break;
    }
    this.setState({textArray: textarray, countnumber: number, sum: result});
  }

  calculator(number) {
    let basenumber = Number(this.formulaArray[0]);
    let result = 0;

    switch (this.formulaArray[1]) {
      case '+':
        result = basenumber+number;
        break;
      case '-':
        result = basenumber-number;
        break;
      case 'x':
        result = basenumber*number;
        break;
      case '/':
        result = basenumber/number;
        break;
    }
    return result;
  }

  onClearPressed() {
    this.setState({textArray: [], countnumber: '', sum: 0});
    this.formulaArray = [];
  }

  render() {
    const { textArray, countnumber, sum } = this.state;
    let text = textArray.join('');
    let result = sum.toString();
    console.log('text = '+text+', countnumber = '+countnumber+', sum = '+sum);

    return (
        <ImageBackground source={require('./images/bg_image.png')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.bgmask}></View>
            <TextInput value={text} style={styles.formulaText} editable={false}/>
            <View style={styles.textRawGroup}>
              <TextInput value={countnumber} style={styles.inputnumber} editable={false}/>
              <TextInput value={result} style={styles.result} editable={false}/>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('1')}>1</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('2')}>2</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('3')}>3</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onPressed('+')}>+</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('4')}>4</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('5')}>5</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('6')}>6</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onPressed('-')}>-</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('7')}>7</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('8')}>8</Button>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('9')}>9</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onPressed('x')}>x</Button>
            </View>
            <View style={styles.buttonRawGroup}>
              <Button style={styles.numberbutton} onPress={() => this.onPressed('0')}>0</Button>
              <Button style={styles.acbutton} onPress={() => this.onClearPressed()}>AC</Button>
              <Button style={styles.operatorbutton} onPress={() => this.onPressed('=')}>=</Button>
              <Button style={styles.numberbuttonRE} onPress={() => this.onPressed('/')}>/</Button>
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
  formulaText: {
    justifyContent: 'center',
    marginBottom: 10,
    height: 50,
    width: 310,
    color: 'black',
    fontSize: 20,
    backgroundColor: 'rgba(248,248,255, 0.4)',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  textRawGroup: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputnumber: {
    marginRight: 10,
    height: 50,
    width: 200,
    color: 'black',
    fontSize: 20,
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
    backgroundColor: 'rgba(248,248,255, 0.4)',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  buttonRawGroup: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
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
    backgroundColor: '#FFD306',
    borderWidth: 0,
    borderRadius: 10,
  },
  operatorbutton: {
    marginRight: 10,
    height: 60,
    width: 70,
    backgroundColor: '#FFD306',
    borderWidth: 0,
    borderRadius: 10,
  },
  acbutton: {
    marginRight: 10,
    height: 60,
    width: 70,
    backgroundColor: '#00AEAE',
    borderWidth: 0,
    borderRadius: 10,
  },
});
