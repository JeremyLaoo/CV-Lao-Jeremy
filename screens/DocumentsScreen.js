import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Overlay } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomHeader from './CustomHeader'
import DiplomeScreen from './DiplomesScreen'
import CertificatScreen from './CertificatsScreen'
import CVScreen from './CVScreen'




const Tab = createMaterialTopTabNavigator();
function DocumentScreen({navigation}) {

  const [visible, setVisible] = useState(false);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Documents" navigation={navigation}/>


        <Tab.Navigator

          screenOptions={({ route }) => ({  
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'Diplomes et formations') {
              iconName = 'ios-school';
            } else if (route.name === 'Certificats de travail') {
              iconName = 'logo-github';
            } else if (route.name === 'CV format pdf') {
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
        }}
        >
          <Tab.Screen name="Diplomes et formations" component={DiplomeScreen} />
          <Tab.Screen name="Certificats de travail" component={CertificatScreen} />
          <Tab.Screen name="CV format pdf" component={CVScreen} />
        </Tab.Navigator>

     
          
          
      

        



        
      </SafeAreaView>
    );
  }

  


  const styles = {

    header : {
      flexDirection:'row',
      backgroundColor:'red',
      height:50,
    },
    headerDetail:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      
    },
    headerTitle:{
      fontSize:16,
    }
  }

  export default DocumentScreen