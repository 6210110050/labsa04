import React from "react"
import { FlatList, Text, TouchableHighlight, View, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/core"
import {StyleSheet}  from 'react-native'
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress= {() => {navigation.navigate('Weather', {zipCode: code})}} >
    <View style={styles.zipItem}>
    <Text>{place}</Text>
    <Text>{code}</Text>
    </View>
    </TouchableHighlight>
    )
   const _keyExtractor = item => item.code
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../14.jpg')} style={styles.backdrop}>
    <FlatList
    data={availableZipItems}
    keyExtractor={_keyExtractor}
    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
    /></ImageBackground>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flex:1 ,
        height:"100%",
        width:"80%",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:"10%",
        marginTop:"3.5%",
    },
    zipPlace: {
    flex:1,
    },
    zipCode: {
        flex:1,
    },
    backdrop:{
        width: '100%',
        height: '100%'
    }
   });