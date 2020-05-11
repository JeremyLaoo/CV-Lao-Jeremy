import React, {useState} from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { SliderBox } from "react-native-image-slider-box"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WebView } from 'react-native-webview';

import Icon from 'react-native-vector-icons/FontAwesome';


function ReactScreen({navigation}) {


    return (
      <SafeAreaView style={{ flex: 1 }}>
        
        <View style={{ flex: 1, alignItems:'center' }}>
        
        <View style={{backgroundColor:'white', marginTop:20, borderRadius:5, borderRightWidth:2, borderBottomWidth:2, borderColor:'#e6e3df',}}>
          <View style={{width:280, height:200, margin:5}}>
              <WebView
                source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9O6PyfNY5uE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}}
                style={{}}
              />
          </View>
          <View>
                  <Text style={{fontSize:20, fontWeight:'bold', margin:10}}>My Moviz</Text>
                </View>
                <View style={{width:280}}>
                  <Text style={{marginLeft:10, marginRight:10}}>Site Web qui propose une liste de films, avec les dernières sorties cinéma à jour grâce à une API et qui permet de créer notre propre whishlist.</Text>
                </View>
                
                <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                  <Icon name="github" size={30} color="black"/>
                  <Text
                  style={{textDecorationLine:'underline', color:'blue', marginLeft: 5}}
                  onPress={() => Linking.openURL('https://drive.google.com/open?id=1MRRYv9VEtUF_dNfFrMrJdNJCct-5YNLJ')}
                  >Lien vers GitHub MyMoviz</Text>
                </View>
        </View>
          

          
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