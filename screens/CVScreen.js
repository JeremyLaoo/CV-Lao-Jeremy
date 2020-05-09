import React, { useState } from 'react';
import {Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import CustomHeader from './CustomHeader'



function CVScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

      <View style={{ flex: 1,  }}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://drive.google.com/open?id=1v7WKJirIlf0I7VnfG8uwA2d340ulYKl8')}
        >
          <View style={styles.line}>
              <Image source={require('../src/images/pdf.png')}
              style={styles.image}/>
              <View style={{flex:2,}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>CV LAO Jérémy</Text>
                <Text style={{fontSize:12}}>Dernière mis à jour : 01/05/2020</Text>
              </View>
          </View>
        </TouchableOpacity>
        
        
        
        
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
        margin:5,
        borderRadius:10
        
    },
    image : {
        
        height:40,
        width: 40,
        
        marginRight: 20,
    }

  })
  

  export default CVScreen