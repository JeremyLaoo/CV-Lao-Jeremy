import React, {useState} from 'react';
import { Linking, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


function JavascriptScreen({navigation}) {
    const [stateBikeshop, setStateBikeshop] = useState(
        [
          require('../src/images/bikeshop1.png'),         
          require('../src/images/bikeshop2.png'),          
          require('../src/images/bikeshop3.png'),          
          
        ]
      )

    const [stateWeatherapp, setStateWeatherapp] = useState(
    [
        require('../src/images/weatherapp1.jpg'),         
        require('../src/images/weatherapp2.png'),           
        require('../src/images/weatherapp3.png'), 
        require('../src/images/weatherapp4.png'), 
        require('../src/images/weatherapp5.png'),           
        
    ]
    )



    return (
      <SafeAreaView style={{ flex: 1 }}>
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={{flex:1,  marginTop:20, } }>
              
              <View style={{backgroundColor:'white', width:320, height:250, alignItems:'center', borderTopRightRadius:20, borderTopLeftRadius:20, borderRightWidth:3, borderColor:'#e6e3df'}}>
                <SliderBox 
                  images={stateBikeshop} 
                  dotColor={'#ec9b3b'}
                  inactiveDotColor={'#e6e3df'}
                  ImageComponentStyle={{borderRadius: 15, width:310, height:220, marginBottom:30, marginTop:5,  }}
                />
              </View>
              <View style={{backgroundColor:'white', width:320, borderBottomRightRadius:20, borderBottomLeftRadius:20, borderRightWidth:3, borderBottomWidth:3, borderColor:'#e6e3df'}}>
                <View>
                  <Text style={{fontSize:20, fontWeight:'bold', margin:10}}>Bikeshop</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10, marginRight:10}}>Site Web marchand</Text>
                  <Text style={{fontSize:10, marginLeft:10, marginRight:10}}>(Projet en HTML CSS / Page Web responsive / BootStrap / Express / Node.js)</Text>
                </View>
                
                <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                  <Icon name="github" size={30} color="black"/>
                  <Text
                  style={{textDecorationLine:'underline', color:'blue', marginLeft: 5}}
                  onPress={() => Linking.openURL('https://github.com/JeremyLaoo/BikeShop')}
                  >Lien vers GitHub Bikeshop</Text>
                </View>
                
              </View>
              
            </View>

            <View style={{flex:1,  marginTop:20, } }>
              
              <View style={{backgroundColor:'white', width:320, height:250, alignItems:'center', borderTopRightRadius:20, borderTopLeftRadius:20, borderRightWidth:3, borderColor:'#e6e3df'}}>
                <SliderBox 
                  images={stateWeatherapp} 
                  dotColor={'#ec9b3b'}
                  inactiveDotColor={'#e6e3df'}
                  ImageComponentStyle={{borderRadius: 15, width:310, height:220, marginBottom:30, marginTop:5,  }}
                />
              </View>
              <View style={{backgroundColor:'white', width:320, borderBottomRightRadius:20, borderBottomLeftRadius:20, borderRightWidth:3, borderBottomWidth:3, borderColor:'#e6e3df'}}>
                <View>
                  <Text style={{fontSize:20, fontWeight:'bold', margin:10}}>Weather App</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10, marginRight:10}}>Site Web utilisant une API</Text>
                  <Text style={{marginLeft:10, marginRight:10}}>Permet d'afficher la météo selon ce que l'utilisateur souhaite connaître</Text>
                  <Text style={{fontSize:10, marginLeft:10, marginRight:10}}>(Projet en HTML CSS / Page Web responsive / BootStrap / Express / Node.js)</Text>
                </View>
                
                <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                  <Icon name="github" size={30} color="black"/>
                  <Text
                  style={{textDecorationLine:'underline', color:'blue', marginLeft: 5}}
                  onPress={() => Linking.openURL('https://github.com/JeremyLaoo/WeatherApp')}
                  >Lien vers GitHub Weather App</Text>
                </View>
                
              </View>
              
            </View>



          </ScrollView>
          
          
            
        </View>
        
      </SafeAreaView>
    );
  }


  export default JavascriptScreen