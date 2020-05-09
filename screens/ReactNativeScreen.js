import React, {useState} from 'react';
import { Linking, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';




function ReactNativeScreen({navigation}) {

    const [stateOrdr, setStateOrdr] = useState(
        [
          require('../src/images/ordR1.jpeg'),         
          require('../src/images/ordR2.jpeg'),          
          require('../src/images/ordR3.jpeg'),          
          require('../src/images/ordR4.jpeg'), 
          require('../src/images/ordR5.jpeg'), 
          require('../src/images/ordR6.jpeg'), 
        ]
      )

    return (
      <SafeAreaView style={{ flex: 1 }}>
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ScrollView>
            
            <View style={{flex:1,  marginTop:20, } }>
              
              <View style={{backgroundColor:'white', width:300, height:250, alignItems:'center', borderTopRightRadius:20, borderTopLeftRadius:20, borderRightWidth:3, borderColor:'#e6e3df'}}>
                <SliderBox 
                  images={stateOrdr} 
                  dotColor={'#ec9b3b'}
                  inactiveDotColor={'#e6e3df'}
                  ImageComponentStyle={{borderRadius: 15, width:100, height:200, marginBottom:30, marginTop:10,  }}
                />
              </View>
              <View style={{backgroundColor:'white', width:300, borderBottomRightRadius:20, borderBottomLeftRadius:20, borderRightWidth:3, borderBottomWidth:3, borderColor:'#e6e3df'}}>
                <View>
                  <Text style={{fontSize:20, fontWeight:'bold', margin:10}}>OrdR</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10, marginRight:10}}>Application Mobile permettant de commander à partir de sa table via un QR Code</Text>
                </View>
                
                <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                  <Icon name="github" size={30} color="black"/>
                  <Text
                  style={{textDecorationLine:'underline', color:'blue', marginLeft: 5}}
                  onPress={() => Linking.openURL('https://drive.google.com/open?id=1MRRYv9VEtUF_dNfFrMrJdNJCct-5YNLJ')}
                  >Lien vers GitHub OrdR</Text>
                </View>
                
              </View>
              
            </View>



          </ScrollView>
          
          
            
        </View>
        
      </SafeAreaView>
    );
  }


  export default ReactNativeScreen