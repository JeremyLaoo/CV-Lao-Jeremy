import React, {useState} from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader'




function AboutMeScreen({ navigation }) {

  const [itemSelected, setItemSelected] = useState (false);

  const [visibleGsa, setVisibleGsa] = useState(false);
        const toggleOverlayGsa = () => {
          setVisibleGsa(!visibleGsa);
        }

 const [visibleInfo, setVisibleInfo] = useState(false);
        const toggleOverlayInfo = () => {
          setVisibleInfo(!visibleInfo);
        }

  const [visibleRec, setVisibleRec] = useState(false);
  const toggleOverlayRec = () => {
    setVisibleRec(!visibleRec);
  }

  const [visibleLoisirs, setVisibleLoisirs] = useState(false);
  const toggleOverlayLoisirs = () => {
    setVisibleLoisirs(!visibleLoisirs);
  }
  

  
    return (
      <SafeAreaView style={{flex:1}}>

{/* LA GSA  */}

        <Overlay isVisible={visibleGsa} width="auto" height="auto" onBackdropPress={toggleOverlayGsa} >
            <View>
              <Image source={require('../src/images/gsa.jpeg')}
                style={styles.imageOverlay}/>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayTitle}>La grande surface alimentaire</Text>
                <Text style={{width:300, textAlign:'center', padding:10}}>
                  Mes premières expériences professionnelles ont été dans la grande distribution alimentaire. 
                  Parti du bas de l'échelle en tant que saisonnier, j'ai pu petit à petit gravir les échelons. 
                  Après mes études, j'ai occupé un poste de directeur adjoint de magasin où j'ai géré une équipe d'une trentaine de personnes. 
                  J'ai ensuite été promu au sein d'un supermarché avec un CA hebdomadaire de 1M d'€. 
                  Mes tâches consistaient à gérer le magasin aussi bien matériel, financier que humain avec une équipe d'une soixantaine de personnes.
                </Text>
                <Text style={{width:300, textAlign:'center', padding:10}}>
                  J'ai ensuite évolué au poste d'acheteur spécialisé en fruits et légumes avec la gestion d'un portefeuille produits d'une centaine d'articles.
                </Text>
              </View>
              
            </View> 
        </Overlay>

{/* OVERLAY INFORMATIQUE  */}

        <Overlay isVisible={visibleInfo} width="auto" height="auto" onBackdropPress={toggleOverlayInfo} >
            <View>
              <Image source={require('../src/images/informatique.jpg')}
                style={{width:302,
                  height:150, 
                  borderWidth:1,
                  borderColor:'#b5b0b0',
                  borderTopLeftRadius:5, 
                  borderTopRightRadius:5}}/>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayTitle}>L'informatique</Text>
                <Text style={{width:300, textAlign:'center', padding:10}}>
                  Je suis né dans les années 1990, c'est naturellement que j'ai baigné depuis ma plus tendre enfance dans l'informatique. 
                  Au départ, les jeux vidéos avec la SEGA, la NINTENDO NES ou même la GAMEBOY classic, pour ensuite connaître le web avec la connexion limitée. 
                  C'est à partir de ce moment que né ma passion pour cet univers infini où il est possible de faire une multitude de choses.
                </Text>
              </View>
              
            </View> 
        </Overlay>

{/* OVERLAY RECONVERSION  */}

        <Overlay isVisible={visibleRec} width="auto" height="auto" onBackdropPress={toggleOverlayRec} >
          <View>
            <Image source={require('../src/images/reconversion.jpg')}
                  style={styles.imageOverlay}/>
            <View style={styles.textOverlay}>
              <Text style={styles.overlayTitle}>La reconversion</Text>
              <Text style={{width:300, textAlign:'center', padding:10}}>
                  Bien que j'adorais mon ancien travail, où je devais allier aussi bien <Text style={{fontWeight:'bold'}}>autonomie</Text> que  
                  <Text style={{fontWeight:'bold'}}> travail d'équipe</Text>, 
                  <Text style={{fontWeight:'bold'}}> responsabilité</Text> et <Text style={{fontWeight:'bold'}}> gestion</Text>; je commençais à ressentir de l'ennui. Les journées paraissaient longues et j'avais cette impression 
                  d'avoir tout vu de mon poste en magasin. Je voulais voir autre chose. Après discussion avec la RH, 
                  j'ai été muté au poste d'acheteur fruits et légumes. Je me suis dit un nouveau challenge qui va me permettre de 
                  relancer ma motivation et d'effacer cette routine qui s'était installée. 
                  Malheureusement après avoir passé 1 an je me rend compte que ce poste ne me plaisait pas.
                </Text>
            </View>
            
          </View>
        </Overlay>

{/* OVERLAY LOISIRS  */}

        <Overlay isVisible={visibleLoisirs} width="auto" height="auto" onBackdropPress={toggleOverlayLoisirs} >
            <View>
              <Image source={require('../src/images/hobbies.jpg')}
                style={styles.imageOverlay}/>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayTitle}>Mes loisirs</Text>
                <Text style={{width:300, textAlign:'center'}}>Passionné par l'informatique mais également plein d'autres choses, comme par exemple :</Text>
                <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="futbol-o"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Futsal 5v5"
                  />
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="linode"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Jeux de Société"
                  />
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="motorcycle"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Balade Moto"
                  />
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="odnoklassniki"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Viet Vo Dao"
                    
                  />
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="tripadvisor"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Voyages"
                  />
                  <Button
                    buttonStyle={{backgroundColor:'#ec9b3b', width:140, margin:2}}
                    icon={
                      <Icon
                        name="gamepad"
                        size={20}
                        color="white"
                        style={{marginRight:5}}
                      />
                    }
                    title="Jeux vidéos"
                  />
                </View>
                
              </View>
              
            </View> 
        </Overlay>

{/* BODY  */}

        <CustomHeader title="A propos de moi" navigation={navigation}/>

        <View style={{flex:1}}>
          <ScrollView>
          <ScrollView 
            horizontal={true}
            indicatorStyle={'pink'}
          // showsHorizontalScrollIndicator={false}
          >
            <View style={{flexDirection:'row'}}>

              <TouchableOpacity
                style={styles.card}
                onPress={() => {setVisibleGsa(true);}}
              >
                <View style={{flex:1, alignItems:'center', alignContent:'center'}}>
                  <Image source={require('../src/images/gsa.jpeg')}
                  style={styles.image}/>
                  <Text style={styles.text}>La GSA</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.card}
                onPress={() => {setVisibleInfo(true);}}
              >
                <View style={{flex:1,
                   alignItems:'center', 
                   alignContent:'center'
                   }}>
                  <Image source={require('../src/images/informatique.jpg')}
                  style={styles.image}/>
                  <Text style={styles.text}>L'informatique</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => {setVisibleRec(true);}}
              >
                <View style={{flex:1, alignItems:'center', alignContent:'center'}}>
                  <Image source={require('../src/images/reconversion.jpg')}
                  style={styles.image}/>
                  <Text style={styles.text}>La reconversion</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => {setVisibleLoisirs(true);}}
              >
                <View style={{flex:1, alignItems:'center', alignContent:'center'}}>
                  <Image source={require('../src/images/hobbies.jpg')}
                  style={styles.image}/>
                  <Text style={styles.text}>Mes loisirs</Text>
                </View>
              </TouchableOpacity>

            </View>
          </ScrollView>

          <View style={styles.viewDetails}>
            <Text style={styles.viewDetailsTitle}>Une présentation en quelques mots</Text>
            <Text style={styles.viewDetailsDesc}>
              Comme vous avez pu le voir à travers la navigation, je m'appelle Jérémy Lao. 
              Je suis originaire de la banlieue sud de Paris, là où j'ai grandi et où je vis actuellement. 
              Je suis un passionné d'informatique et c'est pour ça que j'aimerais en faire mon métier.
            </Text>
            <Text style={styles.viewDetailsDesc}>
              J'ai été durant plusieurs années dans le commerce où j'ai pu faire mes preuves mais où je ne me sentais pas épanoui. 
              C'est donc à 30 ans que j'ai décidé de faire le grand pas et de me lancer dans cette aventure qu'est la reconversion professionnelle.
            </Text>
          </View>

          </ScrollView>
          
        </View>

        

      
        
        
      </SafeAreaView>
    );
  }

  const styles = {

    card : {
      flex:1,
      height:130, 
      width:140, 
      borderRadius:5, 
      borderRightWidth:2, 
      borderBottomWidth:2,
      borderColor: '#b5b0b0', 
      margin:10, 
      shadowOffset:{width:3, height:3}, 
      shadowColor:'#cfcaca', 
      shadowOpacity:1.0,
      backgroundColor:'white'
    },

    image : {
      height:90, 
      width:130,
      borderRadius:5, 
      marginTop:3,
    },

    text: {
      fontSize:14,
      marginTop: 10,
      color:'#ec9b3b',
      fontWeight:'bold',
    },

    cardDetails:{
      flex:1, 
      height:'auto', 
      borderRadius:5, 
      borderWidth:1, 
      borderColor: '#b5b0b0', 
      margin:10, 
      
      
    },

    viewDetails:{
      flex:1,
      borderRadius:5, 
      
      borderBottomWidth:2, 
      borderColor: '#b5b0b0', 
      margin:10, 
      height:300,
      alignItems:'center',
      backgroundColor:'white',
      
    },

    viewDetailsTitle:{
      // flex:1,
      marginTop:15,
      marginBottom:20,
      fontWeight:'bold',
      fontSize:20,
      color:'#ec9b3b',

  
    },

    viewDetailsDesc:{
      // flex:1,
      marginRight:15,
      marginLeft:15,
      marginBottom:15,
      fontSize:16,
      textAlign:'center',
      

      
    },

    viewDetailsOther:{
      flex:1,
      margin:15,
    },

    overlay:{
      width:300,
      height:450,
      alignItems:'center',
      
    },

    overlayTitle:{
      fontSize:20,
      color:'#ec9b3b',
      margin:10,
      fontWeight:'bold'
    },

    imageOverlay : {
      width:302,
      height:150, 
      borderTopLeftRadius:5, 
      borderTopRightRadius:5
    },

    textOverlay:{
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
      borderLeftWidth:1,
      borderBottomWidth:1,
      borderRightWidth:1,
      borderColor: '#b5b0b0',
      paddingBottom:15,
    },

    buttonHobbies:{
      width:200
    }
  }

  export default AboutMeScreen