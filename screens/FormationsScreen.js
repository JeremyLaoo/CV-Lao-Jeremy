import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

import CustomHeader from './CustomHeader'

// API YOUTUBE AIzaSyDsl_gaIgmteoR9QaeWFvJVbYKwF3EB_H4


function FormationsScreen({navigation}) {

  const [visibleDev, setVisibleDev] = useState(false);
  const toggleOverlayDev = () => {
    setVisibleDev(!visibleDev);
  }
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Formation" isHome={true} navigation={navigation}/>

        <Overlay isVisible={visibleDev} width="auto" height="auto" onBackdropPress={toggleOverlayDev} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>La Capsule Coding BootCamp</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:10, marginLeft:5,}}>
                <View style={{flexDirection:'row'}}>
                  <Icon name="map-marker" size={12} color="red" style={{marginLeft:5, marginRight:10, marginBottom:5}}/>
                  <Text style={{fontSize:12}}>Lieu : Paris (75010)</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Icon name="file-text-o" size={12} color="red" style={{marginLeft:5, marginRight:10, marginBottom:5}}/>
                  <Text style={{fontSize:12}}>Durée de formation : 400h sur 3 mois </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Icon name="calendar-check-o" size={12} color="red" style={{marginLeft:5, marginRight:10, marginBottom:5}}/>
                  <Text style={{fontSize:12}}>Date : 6 Janvier 2020 au 13 Mars 2020</Text>
                </View>
                
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="gears" size={14} color="red" style={{marginRight:5}}/>
                <Text style={{fontSize:14}}>Programme de la formation :</Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>Développeur web et mobile Fullstack JavaScript</Text>
              </View>
              
            </View>
            <View>
              
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Conception et prototypage d’applications web et mobile
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Programmation Front-end : HTML 5 / CSS / JavaScript / JQuery / Bootstrap / React / Redux
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Programmation Back-end : Node.JS / Express
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Base de données : Mongo DB
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Workflow : Git / Github
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Overlay>

          <ScrollView>
            <View style={styles.rowCard}>
              <View style={{backgroundColor:'white', width:300, alignItems:'center', borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e3df', borderRadius:5 ,}}>
                <View style={{width:280, height:200, marginTop:5}}>
                  <WebView
                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tyhSF0fwUJ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                    style={{}}
                  />
                </View>
                <TouchableOpacity onPress={() => {setVisibleDev(true);}} style={{backgroundColor:'white', width:280, height:100, alignItems:'center', marginBottom:5, }}>  
                        <View style={{flex:1, justifyContent:'center', marginTop:10, borderTopWidth:1,  width: 200, borderColor:'#ec9b3b'}}>
                          <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Icon name="graduation-cap" size={12} color="red"/>
                            <Text style={{textAlign:'center'}}> Formation certifiante</Text>
                          </View>
                          <View>
                            <Text style={{textAlign:'center', fontSize:11}}> Janv 2020 - Mars 2020</Text>
                          </View>
                          <View style={{marginTop:5}}>
                            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16}}> Développeur Fullstack Javascript</Text>
                          </View>
                        </View>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowCard}>
              <View style={{backgroundColor:'white', width:300, alignItems:'center', borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e3df', borderRadius:5 ,}}>
                <View style={{width:280, height:200, marginTop:5}}>
                  <WebView
                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qPXSiqtaqHs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                    style={{}}
                  />
                </View>
                <TouchableOpacity onPress={() => {setVisibleDev(true);}} style={{backgroundColor:'white', width:280, height:100, alignItems:'center', marginBottom:5, }}>  
                        <View style={{flex:1, justifyContent:'center', marginTop:10, borderTopWidth:1,  width: 200, borderColor:'#ec9b3b'}}>
                          <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Icon name="graduation-cap" size={12} color="red"/>
                            <Text style={{textAlign:'center'}}> Master II</Text>
                          </View>
                          <View>
                            <Text style={{textAlign:'center', fontSize:11}}> Sept 2012 - Sept 2014</Text>
                          </View>
                          <View style={{marginTop:5}}>
                            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16}}> Management et Marketing</Text>
                          </View>
                        </View>
                </TouchableOpacity>
              </View>
            </View>

          <View style={styles.rowCard}>
              
                  <View style={{backgroundColor:'white', width:160, height:200, alignItems:'center', margin:5, borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e3df', borderRadius:5 ,}}>
                      <View style={{flex:1}}>
                        <Image source={require('../src/images/icd.jpg')}
                              style={styles.logo}/>
                      </View>
                      <View style={{flex:1, justifyContent:'center', marginTop:10, borderTopWidth:1,  width: 140, borderColor:'#ec9b3b'}}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                          <Icon name="graduation-cap" size={12} color="red"/>
                          <Text style={{textAlign:'center'}}> Licence</Text>
                        </View>
                        <View>
                          <Text style={{textAlign:'center', fontSize:11}}> Sept 2011 - Sept 2012</Text>
                        </View>
                        <View style={{marginTop:5}}>
                          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16}}> Responsable du développement commercial</Text>
                        </View>
                      </View>
                  </View>

                  <View style={{backgroundColor:'white', width:160, height:200, alignItems:'center', margin:5, borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e3df', borderRadius:5 ,}}>
                      <View style={{flex:1}}>
                        <Image source={require('../src/images/CFA.jpg')}
                              style={styles.logo}/>
                      </View>
                      <View style={{flex:1, justifyContent:'center', marginTop:10, borderTopWidth:1,  width: 140, borderColor:'#ec9b3b'}}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                          <Icon name="graduation-cap" size={12} color="red"/>
                          <Text style={{textAlign:'center'}}> BTS</Text>
                        </View>
                        <View>
                          <Text style={{textAlign:'center', fontSize:11}}> Sept 2009 - Sept 2011</Text>
                        </View>
                        <View style={{marginTop:5}}>
                          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16}}> Management des unités commerciales</Text>
                        </View>
                      </View>
                  </View>
          </View>

          <View style={styles.rowCard}>
              
                  <View style={{backgroundColor:'white', width:160, height:200, alignItems:'center', margin:5, borderBottomWidth:3, borderRightWidth:3, borderColor:'#e6e3df', borderRadius:5 ,}}>
                      <View style={{flex:1}}>
                        <Image source={require('../src/images/creteil.png')}
                              style={styles.logo}/>
                      </View>
                      <View style={{flex:1, justifyContent:'center', marginTop:10, borderTopWidth:1,  width: 140, borderColor:'#ec9b3b'}}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                          <Icon name="graduation-cap" size={12} color="red"/>
                          <Text style={{textAlign:'center'}}> Baccalauréat</Text>
                        </View>
                        <View>
                          <Text style={{textAlign:'center', fontSize:11}}> Sept 2010 - Sept 2011</Text>
                        </View>
                        <View style={{marginTop:5}}>
                          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16}}> Economique et Sociale</Text>
                        </View>
                      </View>
                  </View>

                
          </View>
            
            

          </ScrollView>
        
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    logo: {
      width:140,
      height:90,
      marginTop:3,
    },

    rowCard:{
      flexDirection:'row', 
      margin:5,
      alignItems:'center', 
      justifyContent:'center'
    }
  
})


  export default FormationsScreen