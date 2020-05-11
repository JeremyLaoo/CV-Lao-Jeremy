import React, {useState} from 'react';
import { Image,  Linking, SafeAreaView,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Input } from 'react-native-elements';

import {connect} from 'react-redux';


import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader'




function ContactScreen({navigation, onSubmitText, onSubmitMail, props}) {

  const [text, setText] = useState('');
  const [mail, setMail] = useState('');

  const [visible, setVisible] = useState(false);
        const toggleOverlay = () => {
          setVisible(!visible);
          setText('');
          setMail('');
        }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'#00818a' }}>

        

        <CustomHeader title="Coordonnées" navigation={navigation}/>
          <ScrollView>
            <View>
                <View style={{flex:1, alignItems:'center' }}>
                  <Text style={styles.title}>
                    Contactez-moi via ces différentes plateformes, ça sera un plaisir de pouvoir discuter avec vous.
                  </Text>
                </View>
                  
              
                  <View>
                      <View style={styles.line}>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/j%C3%A9r%C3%A9my-lao-a6351760/')}>
                          <View style={{flex:1, alignItems:'center'}}>
                            <Ionicons name='logo-linkedin' size={30}/>
                          </View>
                          <View style={{flex:10}}>
                            <Text style={{marginLeft: 20}}>Linkedin - Profil </Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.line}>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                        onPress={() => Linking.openURL('https://github.com/JeremyLaoo?tab=repositories')}>
                          <View style={{flex:1, alignItems:'center'}}>
                            <Ionicons name='logo-github' size={30}/>
                          </View>
                          <View style={{flex:10}}>
                            <Text style={{marginLeft: 20}}>GitHub - Repositories</Text>
                          </View>  
                        </TouchableOpacity>
                      </View>

                      <View style={styles.line}>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                        onPress={() => Linking.openURL('mailto:lao.jeremy@live.fr?subject=SendMail&body=Description')}>
                          <View style={{flex:1, alignItems:'center'}}>
                            <Ionicons name='ios-mail' size={30}/>
                          </View>
                          <View style={{flex:10}}>
                            <Text style={{marginLeft: 20}}>Email : Lao.jeremy@live.fr</Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.line}>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
                        onPress={() => Linking.openURL('tel:${0629797712}')}>
                          <View style={{flex:1, alignItems:'center'}}>
                            <Ionicons name='ios-phone-portrait' size={30}/>
                          </View>
                          <View style={{flex:10}}>
                            <Text style={{marginLeft: 20}}>Portable : 06 29 79 77 12</Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={{alignItems:'center', marginTop:20}}>
                        <TextInput
                          style={styles.inputMail}
                          onChangeText={(value) => setMail(value)}
                          placeholder='Votre adresse Mail'
                          icon={<Icon
                            name='user'
                            size={24}
                            color='black'
                          />}
                          value={mail}
                        />
                        <TextInput style={styles.input}
                          onChangeText={(value) => setText(value)} 
                          placeholder='Votre message'
                          value={text}
                          multiline={true}
                          
                        />
                        <Button 

                          icon={
                            <Icon
                            name="envelope-o"
                            size={20}
                            color="#ffffff"
                            style={{marginRight:5,}}
                            
                            />
                          } 
                          buttonStyle={{
                            backgroundColor: "#ec9b3b",
                            paddingRight: 20,
                            paddingLeft:20,
                            marginBottom:40
                          }}
                          title ="Envoyer"
                          onPress={()=>{

                            onSubmitText(text);
                            onSubmitMail(mail);
                            setVisible(true);
                            // setText('');
                            // setMail('');
                            
                            
                            
                            }
                          }
                        />
                      </View>

                  </View>


            </View>
          </ScrollView>

          <Overlay isVisible={visible} width="auto" height="auto" onBackdropPress={toggleOverlay} >
            <View style={{ width:250, padding:5, borderBottomWidth:2, borderColor: "#ec9b3b"}}>
              <Text style={{fontSize:16}}>Bonjour et merci pour votre message </Text>
              <Text style={{fontSize:16}}>{mail} !</Text>
            </View>
            
            <View style={{ width:250, marginTop: 10, padding:5}}>
              <Text style={{fontSize:14}}>Recapitulatif de votre message : </Text>
            </View>
            <View style={{backgroundColor:'#faf5f0', width:250, marginTop:5, padding:5, borderRadius:10}}>
              <Text style={{fontStyle:'italic', fontSize:10}}>"{text}"</Text>
            </View>

            <View style={{ width:250, marginTop: 10, padding:5}}>
              <Text style={{fontSize:14}}>Je reviendrais vers vous très rapidement ! </Text>
            </View>
          </Overlay>
         
            
        
      </SafeAreaView>
    );
  }

  function mapDispatchToProps(dispatch) {
    return {
      onSubmitText: function(text) { 
          dispatch( {type: 'saveMsg', text: text} ) 
      },
      onSubmitMail: function(mail) {
        dispatch( {type:'saveMail', mail: mail})
      }
    }
  }

  function mapStateToProps(state) {
    return { text: state.text, mail: state.mail }
  }

  const styles = StyleSheet.create({
    title:{
        color: 'white',
        width:'auto',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:26,
        margin:20,
        marginBottom:40
    },
    line : { 
      flex:1,
      height:'auto',
      backgroundColor: 'white',
      // alignItems:'center',
      padding: 10,
      marginLeft:20,
      marginRight:20,
      marginTop:5,
      marginBottom:5,
      borderRadius:10
        
    },
    image : {
        
        height:80,
        width: 80,
        borderRadius:60,
        marginRight: 10,
    },

    input : {
      flex: 1, 
      padding: 4, 
      marginRight: 1, 
      marginTop: 5, 
      borderWidth: 1, 
      borderRadius: 4, 
      borderColor: '#E6E5ED', 
      backgroundColor: '#F8F8F9', 
      justifyContent: 'flex-start', 
      height: 150, 
      width:280,
      marginBottom:20,
      textAlignVertical: 'top',
      padding:15

      
    },

    inputMail:{
      width:280,
      height:30,
      marginBottom:5,
      backgroundColor:'white',
      borderRadius:5,
      paddingLeft:15,
    },

   

  })
  

  export default connect(
    null, 
    mapDispatchToProps
)(ContactScreen);