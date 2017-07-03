import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from './Greeting';
import BlinkApp from './Blink'; 
class HelloReactNative extends React.Component {
  render() {
    let pic = {  
      uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'
    };
    return ( 
      <View style={styles.container}>
        <Image source={pic} style={{width: 100, height:100}}/>
        <Greeting name="React"/>
        <Greeting name="Wuako" style={styles.red}/>
        <Greeting name="Jako"/>
        <Greeting name="Doc"/>
        <BlinkApp text="React Active" style={styles.bigblue} />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf2f5', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'green',
    fontSize: 35
  },
  red: {
    color : 'red'
  }
});

export default HelloReactNative;