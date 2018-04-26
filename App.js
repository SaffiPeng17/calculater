/**
 * Sample React Native App
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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  //Init
  constructor(props, context) {
    super(props, context);

    this.state = {
      input: '',
    }
  }

  _handlePress() {
    console.log('Pressed!');
  }

  onButtonPressed() {
    console.log("onButtonPressed");
  //   const { input } = this.state;
  //
  //   if(!input) {
  //     return;
  //   }
  //
  //   if(navigator) {
  //     navigator.push({
  //       name: 'GuestSiteScene',
  //       component: GuestSiteScene,
  //       params: {
  //         password: password
  //       }
  //     })
  //   }
  }


  render() {
    const {input} = this.state;

    return (
        <ImageBackground source={require('../calculator/images/bg_image.png')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.bgmask}></View>
            <Text styles={styles.formula}/>
            <TextInput style={styles.inputarea}
                onChangeText={ (input) => { this.setState({input}) } }
                autoCorrect={false}
                value={input}
            />
            <Button style={styles.button} onPress={() => this._handlePress()}>1</Button>
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
  inputarea: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    marginBottom: 10,
    height: 50,
    width: 320,
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
    backgroundColor: 'rgba(248,248,255, 0.4)',
    borderRadius: 10,
  },
  button: {
    left: 28,
    height: 80,
    width: 80,
    marginTop: 10,
    backgroundColor: '#FF7F50',
    borderWidth: 0,
    borderRadius: 10,
  }
});
