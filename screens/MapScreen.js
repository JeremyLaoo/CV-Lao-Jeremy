import React, {useState} from 'react';
import { Linking, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';


import CustomHeader from './CustomHeader'

function MapScreen({navigation}) {

    var markers = [
        {
          latitude: 48.866667,
          longitude: 2.333333,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ];
    
  
      return (
        <SafeAreaView style={{justifyContent:'center' }}>

            <CustomHeader title="Carte" navigation={navigation}/>

            <View>

                <View style={{width:'auto', height:400, borderWidth:1,  margin:2, borderColor:'#e6e3df',}}>
                    <MapView
                        style={{flex:1, borderRadius:5}}
                        initialRegion={{
                            latitude: 48.8632664,
                            longitude: 2.3482634,
                            latitudeDelta: 1000,
                            longitudeDelta: 1000,
                        }}   
                    >
                        <MapView.Marker
                            coordinate={{latitude: 45.4972159,
                            longitude: -73.6103642}}
                            title={"Montréal"}
                        />
                        <MapView.Marker
                            coordinate={{latitude: 31.6258257,
                            longitude: -7.9891608}}
                            title={"Marrakech"}
                        />
                        <MapView.Marker
                            coordinate={{latitude: 10.7758439,
                            longitude: 106.7017555}}
                            title={"Ho Chi Minh"}
                        />
                        <MapView.Marker
                            coordinate={{latitude: 11.568271,
                            longitude: 104.9224426}}
                            title={"Phnom Penh"}
                        />
                    </MapView>
                </View>

                <View style={{width:300, height:200, backgroundColor:'white', alignItems:'center'}}>
                    <Text>Hello
                    </Text>
                </View>

            </View>
                    
            

        </SafeAreaView>
  
       
            
            
        
  
          
  
  
  
          
        
      );
    }
  
    
  
  
    const styles = {
  
      
      
    }
  
    export default MapScreen