import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';



function WelcomeScreen({navigation}) {
    return (
      <SafeAreaView style={{flex:1}}>
        {/* <CustomHeader title="Login" navigation={navigation}/> */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#00818a'}}>
        <View style={{height: 150, alignItems:'center', justifyContent:'center', }}>
          <Image source={require('../src/images/profil.jpg')}
            style={styles.image}/>
          </View>
          <Text style={styles.textTitle}>Bienvenue sur l'application CV</Text>
          <Text style={styles.textTitle}>de</Text>
          <Text style={styles.textName}>JEREMY LAO</Text>

          <Button
            buttonStyle={{
              backgroundColor: '#ec9b3b',
              height: 50,
              width: 200,
              borderRadius: 20,
              marginTop: 50,
              justifyContent: 'center',
            }}
            
            title="C'est parti !"
          
            onPress={()=>navigation.navigate('HomeApp')}
          />

        </View>
        
      </SafeAreaView>
    );
  }

  const styles = {

    image:{
      height:120, 
      width:120,
      borderRadius:60,
      marginBottom: 30

    },

    textTitle : {
      color:'#FFF',
      marginTop: 10,
      fontSize: 18,
      
    },

    textName : {
      color:'#FFF',
      marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold'

    }
    
  }
  

  export default WelcomeScreen