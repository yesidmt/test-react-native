


import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native'

export default  ComponenteTexto = (props) =>{

		return(
		<View>
		 <TextInput
            style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <TextInput
            style = {styles.input}
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
         />
         <TouchableHighlight
            style = {styles.submit}
            onPress = { () => props.login(props.email, props.password)}
		   >
            <Text>
               Submit
            </Text>
         </TouchableHighlight>
		</View>
	)

}



const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
	  borderRadius: 10
   },
   submit: {
      backgroundColor: 'silver',
      padding: 10,
	  width: 100,
	  
	 
   }
});
