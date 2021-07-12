import React from 'react';
import { Text,View,ImageBackground,StyleSheet } from 'react-native';
import { useState } from 'react';
import Forecast from './Forecast';



export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
        <ImageBackground source={require('../14.jpg')} style={styles.backdrop}>
          <Text>Zip Code</Text>
          <Text>{props.zipCode}</Text>
          <Forecast {...forecastInfo}/>
          </ImageBackground>
        </View>
  
    )
}

const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });