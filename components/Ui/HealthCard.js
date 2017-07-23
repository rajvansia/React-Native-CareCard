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
    <Text>
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
    <Text>
      {props.value}
    </Text>
  )
}

const CardDate = (props) => {
  return(
    <Text>
      Last updated {props.date}
    </Text>
  )
}

const TotalCard = (props) => {
  return(
    <View style={styles.card}>
    <Title title= {props.title} />
    <CardImage image= {props.image} />
    <CardValue value = {props.value} />
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
            <TotalCard
              title = "Mindfull Eating"
              image = 'https://png.icons8.com/vegan-food/win10/86'
              value = "33 meals"
              date = "9/3/17"
            />

            <TotalCard
              title = "Mood"
              image = "https://png.icons8.com/mental-state/win10/86"
              value = "33 meals"
              date = "9/3/17"
            />

            <TotalCard
              title = "Weight"
              image = "https://png.icons8.com/scale/win10/86"
              value = "33 meals"
              date = "9/3/17"
            />

            <TotalCard
              title = "Blood Pressure"
              image = "https://png.icons8.com/heart-health/win10/86"
              value = "33 meals"
              date = "9/3/17"
            />
    </ScrollView>
    );
  }
}
