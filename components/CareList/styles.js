import React,{Component} from 'react';
import{ StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
//   transparentButton: {
//     marginTop: 30,
//     borderColor: 'black',
//     borderWidth: 2,
//     padding: 100,
//     marginLeft: 20,
//     marginRight: 20,
//
// },
  card: {
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },

  valueArea: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  image: {
    width: 69,
    height: 69,
    justifyContent:"center",

},
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingTop: 50,
    backgroundColor: '#d9e3f0',
  },
  title: {
    fontSize: 30,
    paddingBottom: 10
  },
  value: {
    fontSize: 25,
    paddingBottom: 20,
    alignItems:"center",
    justifyContent:"center",

  },
});

module.exports = styles
