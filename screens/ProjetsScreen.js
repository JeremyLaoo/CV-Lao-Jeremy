import React, {useState} from 'react';
import { Linking, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomHeader from './CustomHeader'

import Ionicons from 'react-native-vector-icons/Ionicons';

import ReactNativeScreen from './ReactNativeScreen'
import ReactScreen from './ReactScreen'
import JavascriptScreen from './JavascriptScreen'



const Tab = createMaterialTopTabNavigator();
function ProjetsScreen({navigation}) {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Projets" isHome={true} navigation={navigation}/>

        <Tab.Navigator

          screenOptions={({ route }) => ({  
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'React Native') {
              iconName = 'ios-information-circle';
            } else if (route.name === 'React') {
              iconName = 'ios-list-box';
            } else if (route.name === 'JavaScript') {
              iconName = 'ios-school';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: '#ec9b3b',
          inactiveTintColor: 'white',
          indicatorStyle: {
            backgroundColor: '#ec9b3b',
            height:1
          },
          style:{
            backgroundColor: '#00818a',
            height: 70,
            padding:10,
            marginTop:1,
          },
          iconStyle:{
            size:30,
          }
        }}
        >
          <Tab.Screen name="React Native" component={ReactNativeScreen} />
          <Tab.Screen name="React" component={ReactScreen} />
          <Tab.Screen name="JavaScript" component={JavascriptScreen} />
        </Tab.Navigator>


        
        
      </SafeAreaView>
    );
  }


  export default ProjetsScreen