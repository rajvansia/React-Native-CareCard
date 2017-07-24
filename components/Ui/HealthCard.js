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

const Title = (props) => {
  return (
    <Text style={styles.title}>
      {props.title}
    </Text>
  );
}

const CardImage = (props) => {
  return(
    <Image style={styles.image} source={{uri: props.image}}/>
  )
}

const CardValue = (props) => {
  return(
  <View >
    <Text style={styles.value}>
      {props.value}
    </Text>
  </View>
  )
}

const CardDate = (props) => {
  return(
    <View style={styles.dateTop}>
    <Text style={styles.date}>
      Last updated {props.date}                           Past Data
    </Text>
  </View>
  )
}

const TotalCard = (props) => {
  return(
    <View style={props.styles.card}>
    <Title
      title= {props.title} />
    <View style={styles.imageValue}>
    <CardImage image= {props.image} />
    <CardValue value = {props.value} />
    </View>
    <CardDate date= {props.date} />
    </View>
  )
}

export default class HealthCard extends Component {
  render() {
    return (
      <ScrollView
            automaticallyAdjustContentInsets={false}
          >
          <View style = {styles.container} >
            <TotalCard
              styles = {{card: [styles.card,{backgroundColor:"#2ccce4"}]}}
              title = "Mindfull Eating"
              image = 'https://png.icons8.com/vegan-food/win10/86'
              value = "33 meals"
              date = "9/3/17"
            />

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#dce775"}]}}
              title = "Mood"
              image = "https://png.icons8.com/mental-state/win10/86"
              value = "Happy"
              date = "9/3/17"
            />

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#ba68c8"}]}}
              title = "Weight"
              image = "https://png.icons8.com/scale/win10/86"
              value = "165 Pounds"
              date = "9/3/17"
            />

            <TotalCard
              styles = {{card: [styles.card, {backgroundColor:"#37d67a"}]}}
              title = "Blood Pressure"
              image = "https://png.icons8.com/heart-health/win10/86"
              value = "120/80"
              date = "9/3/17"
            />

        </View>
    </ScrollView>
    );
  }
}
