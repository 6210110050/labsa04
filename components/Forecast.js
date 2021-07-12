import React from 'react'
import { View, Text,StyleSheet } from 'react-native';


export default function Forecast(props) {
    return (
    <View >
    <Text style={styles.main}>{props.main}</Text>
   <Text style={styles.description}>{props.description}</Text>
   <Text style={styles.temp}>{props.temp} 
    <Text style={styles.tempText}>  °C</Text>
    </Text>
    </View>
    );
   }
   const styles = StyleSheet.create({
    main:{
        top: -130,
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    description:{
        top: -100,
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    temp:{
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    tempText:{ 
        fontSize: 30,
    },
}); 


