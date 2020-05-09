import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CustomHeader({title, isHome, navigation}){
    return (
      <View style={{flexDirection: "row", height:80, paddingTop:30, backgroundColor:'#00818a'}}>
       
          <View style={{flex:1, height:50, justifyContent:'center'}}>
            {
              isHome?
              <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Image style={{width:30, height:30, marginLeft:5}}
                      source={require('../src/images/bars.png')}
                      resizeMode="contain"
                />
              </TouchableOpacity>
              :
              <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
              onPress={()=> navigation.goBack()}
              >
              <Image style={{width:25, height:20, marginLeft:5}}
                source={require('../src/images/arrows.png')}
                resizeMode="contain"/>
              </TouchableOpacity>
            }
          </View>
       
        <View style={{flex:1.5, height:50, justifyContent:'center'}}>
          <Text style={{textAlign: 'center', fontSize:20, color:'white'}}>{title}</Text>
        </View>
        <View style={{flex:1, height:50}}></View>
      </View>
    )
  };


  export default CustomHeader