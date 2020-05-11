import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawerContent(props){
    return(

      <SafeAreaView style={{flex:1}}>

        <ImageBackground
          source={require('../src/images/background.jpg')}
          style={{width:undefined, height:200,}}>
          <View style={{height:100, justifyContent:'center', marginLeft: 20, marginTop:10}}>
                <Image source={require('../src/images/profil-color.png')}
                style={{height:80, width: 80, borderRadius:60, marginTop: 50}}/>
          </View>
          <View style={{justifyContent:'center', marginLeft: 20, marginTop: 20}}>
               <Text style={styles.nom}>
                   Jérémy Lao
               </Text>
          </View>
          <View style={{flexDirection:'row', marginLeft: 20, marginTop: 10}}>
                <View>
                    <Icon name="desktop" size={20} color="black"/>
                </View>
                <View>
                    <Text style={styles.developpeur}>
                        Développeur FullStack JavaScript
                    </Text>
                </View>
                
          </View>
        </ImageBackground>

          
          
        <ScrollView style={{marginLeft:5}}>
  
        <View>
                <TouchableOpacity
                    style={styles.title}
                    onPress={() => props.navigation.navigate('AboutMe')}
                    >
                        <View style={{flex:1, alignItems:'center'}}>
                            <Icon name="user" size={18} color="black"/>
                        </View>
                        <View style={{flex:10, marginLeft:5}}>
                            <Text style={styles.text}>A propos de moi </Text>
                        </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.title}
                    onPress={() => props.navigation.navigate('Documents')}
                    >
                        <View style={{flex:1, alignItems:'center', marginLeft:1}}>
                            <Icon name="folder-open" size={18} color="black"/>
                        </View>
                        <View style={{flex:10 , marginLeft:5}}>
                            <Text style={styles.text}>Documents</Text>
                        </View>
                        
                        
                        
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.title}
                    onPress={() => props.navigation.navigate('Contacts')}
                    >

                        <View style={{flex:1,  alignItems:'center'}}>
                            <Icon name="envelope" size={17} color="black"/>
                        </View>
                        <View style={{flex:10, marginLeft:5}}>
                            <Text style={styles.text}>Contactez-moi</Text>
                        </View>
                        
                        
                        
                </TouchableOpacity>
            </View>
  
        </ScrollView>
        
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    nom : {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    
    },
    developpeur : {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
        
        
    },
    title : {
        flexDirection:'row',
        marginTop : 20,
        marginLeft: 20,
        alignItems:'center',
    },
    text : {
        fontSize: 14,
        fontWeight: '600',
    }
})


  export default CustomDrawerContent