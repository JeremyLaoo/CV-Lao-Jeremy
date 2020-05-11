import React, {useState} from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader'
import MapScreen from './MapScreen'




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

  // const [visibleTest, setVisibleTest] = useState(null);
  // const toggleTest = () => {
  //   setVisibleTest(!visibleTest);
  // }


  

  
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
                  J'ai donc débuté ma vie professionnelle dans la Grande Distribution, où j'ai été dans un premier temps saisonnier, puis petit à petit, j'ai été promu en tant que Directeur Adjoint de Magasin. J'ai géré une équipe de 60 personnes, avec un CA hebdomadaire de 1M€. 
                  Mes tâches principales consistaient à gérer le magasin aussi bien matériel, financier que humain. Ce fut un véritable challenge et j'ai énormément appris au cours de ces années. 
                </Text>
                <Text style={{width:300, textAlign:'center', padding:10}}>
                  J'ai fini par évoluer au poste d'acheteur spécialisé en fruits et légumes avec la gestion d'un portefeuille produits d'une centaine d'articles.
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
                <Text style={{width:300, padding:10, textAlign:'justify'}}>
                Je suis né dans les années 1990, une belle époque où sont apparus les différents consoles de jeux. Je me suis donc vite attaché à ce milieu qui me faisait rêver depuis mon enfance. 
                  Au départ, je m'intéressais aux jeux vidéos avec la SEGA, la NINTENDO NES ou même la GAMEBOY classic. Et ensuite, mon intérêt et ma curiosité ont fait que je me suis orienté vers la connaissance du web avec sa connexion limitée d'antan. 
                  C'est à partir de ce moment qu'est née ma passion pour cet univers infini où il est possible de faire une multitude de choses. 
                  J'ai commencé par faire des blogs puis des montages photos, vidéos pour ensuite m'intéresser il y quelques années à la conception de site web.
                  A l'école de commerce, j'ai pu voir la conception de maquettes pour les sites marchands où j'ai trouvé cela particulièrement intéressant. 
                  J'ai donc essayé de me former moi-même. Malheureusement par manque de temps et de bases, le développement restait uniquement un loisir. 
                  Et c'est que dernièrement, lors de ma formation à la Capsule que j'ai réellement appris à coder et à élaborer des sites web mais également des applications mobiles.
                  Je n'avais jamais connu ou tester le développement des applications et à ma grande surprise, j'ai adoré !
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
              <Text style={{width:300,  padding:10, textAlign:'justify'}}>
              Bien que j'adorais mon ancien travail, où je devais allier <Text style={{fontWeight:'bold'}}>autonomie</Text>,  
                  <Text style={{fontWeight:'bold'}}> travail d'équipe</Text>, 
                  <Text style={{fontWeight:'bold'}}> responsabilités</Text> et <Text style={{fontWeight:'bold'}}>gestion</Text>; 
                  les journées me semblaient longues et j'ai l'impression 
                  d'avoir tout vu de mon poste en magasin. Je voulais voir autre chose. Après discussion avec la RH, 
                  j'ai été muté au poste d'acheteur fruits et légumes. 
                  C'était une belle opportunité pour moi car il s'agissait d'un nouveau challenge qui allait me permettre de 
                  relancer ma motivation et d'effacer cette routine qui s'était installée. 
                  Malheureusement après avoir passé 1 an je me suis rendu compte que ce poste ne me plaisait pas. 
                  J'ai donc décidé de quitter mon poste afin de pouvoir me reconvertir professionnellement. 
                  Ce fut un grand pas vers l'inconnu avec des risques notamment financiers  mais qui pour moi en vaut plus que la peine, 
                  car cela me permet aujourd'hui d'exercer un métier qui me plaît et qui me fait grandir chaque jour.
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
                <Text style={{width:300, textAlign:'justify', paddingRight:10, paddingLeft:10}}>Passionné par l'informatique mais également plein d'autres choses, comme par exemple :</Text>
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
                  onPress={()=>navigation.navigate('MapScreen')}
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
              Bonjour à tous ! Je m'appelle Jérémy LAO et j'habite actuellement à Vitry-sur-Seine. Selon moi, l'univers de l'informatique est enrichissant et offre de multiples possibilités de développement. 
             C'est donc naturellement que j'ai manifesté une passion pour ce milieu et aujourd'hui j'ai décidé d'en faire mon métier. 
            </Text>
            <Text style={styles.viewDetailsDesc}>
              J'ai tout d'abord commencé ma vie active dans le commerce, où j'ai pu faire mes preuves et créé mon propre réseau. Malheureusement, je n'étais pas assez épanoui pour continuer dans cette branche.
              C'est donc à 30 ans que j'ai décidé de faire le grand pas et de me lancer dans cette aventure qu'est la reconversion professionnelle.
            </Text>
          </View>

          {/* <Text isVisible={visibleTest}>
            Hello You
          </Text> */}

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
      height:330,
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
      textAlign:'justify',
      

      
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