import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import CustomCard from '../Ui/Card.js'
import styles from './styles.js'

export default class CareList extends Component {
  render() {
    return (
      <ScrollView
            automaticallyAdjustContentInsets={false}
          >

          <CustomCard
            styles={{button: [styles.transparentButton, {backgroundColor:"#50e3c2"}]
            }}
            >
            <Text>Mindfull Eating Progress</Text>
          </CustomCard>

      <CustomCard
        styles={{button: [styles.transparentButton, {backgroundColor:"#dce775"}]}}
        >
        <Text>Mood</Text>
      </CustomCard>

      <CustomCard
        styles={{button: [styles.transparentButton, {backgroundColor:"#ba68c8"}]}}
        >
        <Text>Weight</Text>
      </CustomCard>

      <CustomCard
        styles={{button: [styles.transparentButton, {backgroundColor:"#37d67a"}]}}
        >
        <Text>Blood Pressure</Text>

      </CustomCard>

    </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
