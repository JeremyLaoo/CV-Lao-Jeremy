import React, { useState } from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import CustomHeader from './CustomHeader'



function CertificatScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop:10 }}>
          <ScrollView>

          <View style={{ flex: 1,  }}>
            <View style={styles.line}>
                <Image source={require('../src/images/tf.jpg')}
                style={styles.image}/>
                <Text style={{ flex:3, fontSize:14, fontWeight:'bold'}}>Groupe Tang Freres</Text>
                <Text style={{flex:1, fontSize:11}}>2014-2020</Text>
            </View>
            <View style={styles.line}>
                <Image source={require('../src/images/casino.png')}
                style={styles.image}/>
                <Text style={{flex:3, fontSize:14, fontWeight:'bold'}}>Groupe Casino</Text>
                <Text style={{flex:1, fontSize:11}}>2011-2014</Text>
            </View>
            
            
        </View>

          </ScrollView>
        
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    line : { 
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        marginTop:3,
        marginLeft:5,
        marginRight:5,
        borderRadius:10
        
    },
    image : {
        
        height:80,
        width: 80,
        borderRadius:60,
        marginRight: 20,
    }

  })
  

  export default CertificatScreen