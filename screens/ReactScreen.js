import React, {useState} from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { SliderBox } from "react-native-image-slider-box"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


function ReactScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        


          
        </View>
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


  export default ReactScreen