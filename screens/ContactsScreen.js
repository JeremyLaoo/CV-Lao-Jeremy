import React, {useState} from 'react';
import { Image,  Linking, SafeAreaView,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Input } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader'




function ContactScreen({navigation}) {

  const [text, setText] = useState(null);
  const [mail, setMail] = useState(null);

  const [visible, setVisible] = useState(false);
        const toggleOverlay = () => {
          setVisible(!visible);
        }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'#00818a' }}>

        <Overlay isVisible={visible} width="auto" height="auto" onBackdropPress={toggleOverlay} >
            <Text>Message envoyé</Text>
        </Overlay>

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
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <Ionicons name='logo-linkedin' size={30}/>
                          <Text style={{marginLeft: 20}}
                            onPress={() => Linking.openURL('https://www.linkedin.com/in/j%C3%A9r%C3%A9my-lao-a6351760/')}>
                              Linkedin - Profil 
                          </Text>
                        </View>
                      </View>

                      <View style={styles.line}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <Ionicons name='logo-github' size={30}/>
                          <Text style={{marginLeft: 20}}
                            onPress={() => Linking.openURL('https://github.com/JeremyLaoo?tab=repositories')}>
                              GitHub - Repositories
                          </Text>
                        </View>
                      </View>

                      <View style={styles.line}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <Ionicons name='ios-mail' size={30}/>
                          <Text style={{marginLeft: 20}}
                            onPress={() => Linking.openURL('mailto:lao.jeremy@live.fr?subject=SendMail&body=Description')}>
                              Email : Lao.jeremy@live.fr
                          </Text>
                        </View>
                      </View>

                      <View style={styles.line}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <Ionicons name='ios-phone-portrait' size={30}/>
                          <Text style={{marginLeft: 20}}
                            onPress={() => Linking.openURL('tel:${0629797712}')}>
                              Portable : 06 29 79 77 12
                          </Text>
                        </View>
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
                        />
                        <Button 

                          icon={
                            <Icon
                            name="envelope-o"
                            size={20}
                            color="#ffffff"
                            style={{marginRight:5}}
                            
                            />
                          } 
                          buttonStyle={{
                            backgroundColor: "#ec9b3b",
                            paddingRight: 20,
                            paddingLeft:20,
                          }}
                          title ="Envoyer"
                          onPress={()=>{
                            console.log('mail :>> ', mail);
                            console.log('text :>> ', text);
                            setMail('');
                            setText('');
                            

                            if(setText !== null){
                              setVisible(true);
                            }
                            
                            }
                          }
                        />
                      </View>




                        
                  </View>


            </View>
          </ScrollView>
         
            
        
      </SafeAreaView>
    );
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
      backgroundColor:'white',
      width: 280,
      height:150,
      marginBottom: 10,
      borderRadius:5,
      paddingLeft:15,
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
  

  export default ContactScreen