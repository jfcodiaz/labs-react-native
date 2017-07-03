import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class FlexDirection extends React.Component {
  render() {
    return ( 
       <View style={{flex: 1, flexDirection :'row', backgroundColor:'red'}}>
          <View style={{ width:50, height:50, backgroundColor: 'powderblue' }}/>
          <View style={{ width:50, height:50, backgroundColor: 'skyblue' }}/>
          <View style={{ width:50, height:50, backgroundColor: 'steelblue'}}/>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }}/>
       </View>
    );
  }
}