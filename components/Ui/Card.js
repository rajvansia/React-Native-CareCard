import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Card,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'


// Consts and Libs

/* Component ==================================================================== */
const CustomCard = (props) => {

// this is the function that is called
  function getContent(){
      if(props.children){
        return props.children;
      }
      return <Text style={props.styles.label}>{props.label}</Text>
  }
  return(
    <TouchableHighlight
underlayColor="#ccc"
onPress={props.onPress}
style={[
  props.noDefaultStyles ? '':  styles.button,
  props.styles ? props.styles.button : '']}
      >
      {getContent()}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,


  }
})

export default CustomCard;
