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
      formulaText: '',
      inputNumber: '',
      result: 0,
    };
    this.cardinalNumber = 0;
    this.operator = '';
  }

  onPressed(input) {
    console.log('onPressed: '+input);

    let formula = this.state.formulaText;
    let iNumber = this.state.inputNumber;
    let sum = this.state.result;

    if(['+', '-', 'x', '/'].indexOf(input) !== -1) {  //input: operators
      //--Number
      if(iNumber) {
        formula = formula+iNumber;
        this.cardinalNumber = (this.cardinalNumber == 0) ? Number(iNumber) : this.calculator(Number(iNumber));
        iNumber = '';
      }
      //--Operator
      this.operator = input;
      //If last input is an operator, remove it before adding a new operator.
      if(['+', '-', 'x', '/'].indexOf(formula.charAt(formula.length-1)) !== -1) {
        formula = formula.substring(0, formula.length-1);
      }
      formula = formula+input;
    } else {  //input: number
      iNumber = iNumber+input;
    }
    //Update state.
    this.setState({formulaText: formula, inputNumber: iNumber});
  }

  onEqualPressed() {
    let formula = this.state.formulaText;
    let iNumber = this.state.inputNumber;

    //Number
    if(iNumber) {
      formula = formula+iNumber;
      this.cardinalNumber = (this.cardinalNumber == 0) ? Number(iNumber) : this.calculator(Number(iNumber));
      iNumber = '';
    }
    //Operator
    formula = formula+'=';

    this.setState({formulaText: formula, inputNumber: iNumber, result: this.cardinalNumber});
  }

  calculator(number) {
    let result = 0;

    console.log('cardinalNumber = '+this.cardinalNumber+', this.operator = '+this.operator);
    switch(this.operator) {
      case '+':
        result = this.cardinalNumber+number;
        break;
      case '-':
        result = this.cardinalNumber-number;
        break;
      case 'x':
        result = this.cardinalNumber*number;
        break;
      case '/':
        result = this.cardinalNumber/number;
        break;
    }
    console.log('result = '+result);
    return result;
  }

  onClearPressed() {
    this.setState({formulaText: '', inputNumber: '', result: 0});
    this.cardinalNumber = 0;
    this.operator = '';
  }

  render() {
    const { formulaText, inputNumber, result } = this.state;

    return (
        <ImageBackground source={require('./images/bg_image.png')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.bgmask}></View>
            <TextInput value={formulaText} style={styles.formulaText} editable={false}/>
            <View style={styles.textRawGroup}>
              <TextInput value={inputNumber} style={styles.inputnumber} editable={false}/>
              <TextInput value={result.toString()} style={styles.result} editable={false}/>
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
              <Button style={styles.operatorbutton} onPress={() => this.onEqualPressed()}>=</Button>
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
