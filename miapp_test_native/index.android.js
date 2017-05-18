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
import "./userAgent";

import io from 'socket.io-client';
const socket = io('http://192.168.137.1:8001/', {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
  
});
//socket = io('http://192.168.137.1:8001/',{jsonp:false});
socket.on('messages', (data) => {
    console.log('Some event was called, check out this data: ', data);
});

export default class miapp_test_native extends Component {
   constructor(props) {
      super(props);
	


	this.state = {
         email: '',
         password: '',
		 text: null
      }
   }
   
  
   
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
	    console.log("enviando mensaje");
		var mens = JSON.stringify({

            id: "yesid.mt@hotmail.com"
           
           
        });
		
	   socket.emit('storeClientInfo', mens);
	 
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
