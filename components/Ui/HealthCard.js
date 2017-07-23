import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';
import CustomCard from './Card.js'
import styles from '../CareList/styles.js'

export default class HealthCard extends Component {
  render() {
    return (
      <ScrollView
            automaticallyAdjustContentInsets={false}
          >
          <View>
            <Text>
              Mindful Eating
            </Text>
            <Text>
              95 days
            </Text>
            <Image style={styles.image} source={{uri: 'https://png.icons8.com/vegan-food/win10/86'}}/>
            <Text>
              Last updated 9/6/17
            </Text>
          </View>
    </ScrollView>
    );
  }
}
