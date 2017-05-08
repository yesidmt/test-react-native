/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ComponenteTexto from './src/component/loginView';

export default class miapp_test_native extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: ''
      }
   }
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      alert('email: ' + this.state.email + ' password: ' + this.state.password)
	  console.log('email: ' + this.state.email + ' password: ' + this.state.password);
   }

   render(){
      return(
         <View>
            <ComponenteTexto
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('miapp_test_native', () => miapp_test_native);
