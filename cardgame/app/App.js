/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Heading from './Heading'
import Input from  './Input'
import Button from './Button'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContext } from '@react-navigation/native';

const Stack = createStackNavigator();
function SecondPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App(){
  return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Games">
         <Stack.Screen name="Main" 
         component={Main}
         options={{title:'CardGame'}}/>
         <Stack.Screen name="SecondPage" component={SecondPage} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}

class Main  extends Component {
  static contextType = NavigationContext;

  constructor(){
    super()
    this.state={
      inputValue:'',
      inputValue2:'',
      player1:'',
      player2:''      
    }
    this.submitTodo=this.submitTodo.bind(this)

  }
  inputChange (inputValue, num){
    if(num == 1){

      console.log('Input Value:', inputValue)
      this.setState({inputValue})
  
    }  
    if(num == 2){
      const inputValue2 = inputValue

      console.log('Input Value2:', inputValue2)
      this.setState({inputValue2})
  
    }  
  }
  submitTodo(navigation) {
    if (this.state.inputValue.match(/^\s*$/)) {
      console.log('No input')
      return
    }
    if (this.state.inputValue2.match(/^\s*$/)) {
      console.log('No input2')
      return
    }
    const player1 = this.state.inputValue
    const player2 = this.state.inputValue2

    console.log('Player1: ', player1)
    console.log('Player2: ', player2)

    this.setState({player1, player2}) 
    navigation.navigate('SecondPage')
  }
  render () {
    const navigation = this.context;

    const {inputValue, inputValue2, player1} = this.state

    return (
       <View style={styles.container}>
        <Heading></Heading>
        <Input 
          inputValue = {inputValue}
          inputChange={(text)=> this.inputChange(text, 1)}
          holdername='Player1 Name'>
        </Input>
        <Input 
          inputValue2 = {inputValue2}
          inputChange={(text)=> this.inputChange(text, 2)}
          holdername='Player2 Name'>
        </Input>
        <Button submitTodo={() => this.submitTodo(navigation)} >
        </Button>
        
       </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#f5f5f5'

  }
});

export default App;
