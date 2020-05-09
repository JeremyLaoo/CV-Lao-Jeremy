import React, { useState } from 'react';
import {Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import CustomHeader from './CustomHeader'
import { set } from 'react-native-reanimated';




function DiplomeScreen({navigation}) {

        
        const [visible, setVisible] = useState(false);
        const toggleOverlay = () => {
          setVisible(!visible);
        }

        const [visibleLaCapsule, setVisibleLaCapsule] = useState(false);
        const togglelaCapsule = () => {
            setVisibleLaCapsule(!visibleLaCapsule)
        }

        const [visibleMaster, setVisibleMaster] = useState(false);
        const toggleMaster = () => {
            setVisibleMaster(!visibleMaster)
        }

        


    return (
      <SafeAreaView style={{ flex: 1, marginTop:10 }}>

        <Overlay isVisible={visible} width="auto" height="auto" onBackdropPress={toggleOverlay} >
            <Image source={require('../src/images/diplomelacapsule.jpg')}
                    style={styles.diplome}/>
        </Overlay>
        <Overlay isVisible={visibleLaCapsule} width="auto" height="auto" onBackdropPress={togglelaCapsule} >
            <Image source={require('../src/images/diplomelacapsule.jpg')}
                    style={styles.diplome}/>
        </Overlay>

        <Overlay isVisible={visibleMaster} width="auto" height="auto" onBackdropPress={toggleMaster} >
            <Image source={require('../src/images/diplomemaster.jpg')}
                    style={styles.diplome}/>
        </Overlay>

          <ScrollView>

          <View style={{ flex: 1,  }}>
            <TouchableOpacity
                onPress={() => {setVisibleLaCapsule(true);}}
            >
                <View style={styles.line}>
                    <Image source={require('../src/images/la-capsule.png')}
                    style={styles.image}/>
                    <View style={{flex:3, marginRight:10}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}} >La Capsule</Text>
                        <Text style={{fontSize:12}}>FullStack JavaScript</Text>
                        <Text style={{fontSize:12}}>Développement Web et Mobile</Text>
                        
                    </View>
                    <Text style={{flex:1, fontSize:11}}>Janvier à Mars 2020</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {setVisibleMaster(true);}}
            >
                <View style={styles.line}>
                    <Image source={require('../src/images/icd.jpg')}
                    style={styles.image}/>
                    <View style={{flex:3, marginRight:10}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}} >Grade de Master</Text>
                        <Text style={{fontSize:12}}>Développement des marchés</Text>
                        <Text style={{fontSize:11}}>Mention Assez Bien</Text>
                    </View>
                    <Text style={{flex:1, fontSize:11}}>2012-2014</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                
            >
                <View style={styles.line}>
                    <Image source={require('../src/images/icd.jpg')}
                    style={styles.image}/>
                    <View style={{flex:3, marginRight:10}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}} >Licence ICD</Text>
                        <Text style={{fontSize:12}}>Responsable du développement commercial</Text>
                        <Text style={{fontSize:11}}>Mention Assez Bien</Text>
                    </View>
                    <Text style={{flex:1, fontSize:11}}>2011-2012</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.line}>
                    <Image source={require('../src/images/CFA.jpg')}
                    style={styles.image}/>
                    <View style={{flex:3, marginRight:10}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}} >Brevet Technicien Supérieur</Text>
                        <Text style={{fontSize:12}}>Management des Unités Commerciales</Text>
                        <Text style={{fontSize:11}}>Mention Assez Bien</Text>
                    </View>
                    <Text style={{flex:1, fontSize:11}}>2009-2011</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.line}>
                    <Image source={require('../src/images/creteil.png')}
                    style={styles.image}/>
                    <View style={{flex:3, marginRight:10}}>
                        <Text style={{fontSize:14, fontWeight:'bold'}} >Baccalauréat Général</Text>
                        <Text style={{fontSize:12}}>Economique et social</Text>
                        <Text style={{fontSize:11}}>Mention Assez Bien</Text>
                    </View>
                    
                    <Text style={{flex:1, fontSize:11}}>2008-2009</Text>
                </View>
            </TouchableOpacity>
            
            
            
            
        </View>

          </ScrollView>
        
        
      </SafeAreaView>
    );
  }

  

  const styles = StyleSheet.create({
    line : { 
        flex:1,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        marginLeft:5,
        marginRight:5,
        marginTop:3,
        borderRadius:10
        
    },
    image : {
        
        height:80,
        width: 80,
        borderRadius:60,
        marginRight: 10,
    },

    diplome:{
        height : 200,
        width:300
    }
  
})

  export default DiplomeScreen