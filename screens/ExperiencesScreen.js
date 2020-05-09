import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from './CustomHeader'

function ExperiencesScreen({navigation}) {

  const [visible2019, setVisible2019] = useState(false);
        const toggleOverlay2019 = () => {
          setVisible2019(!visible2019);
        }

  const [visible2018, setVisible2018] = useState(false);
  const toggleOverlay2018 = () => {
    setVisible2018(!visible2018);
  }
  const [visible2016, setVisible2016] = useState(false);
  const toggleOverlay2016 = () => {
    setVisible2016(!visible2016);
  }

  const [visible2014, setVisible2014] = useState(false);
  const toggleOverlay2014 = () => {
    setVisible2014(!visible2014);
  }

  const [visible2011, setVisible2011] = useState(false);
  const toggleOverlay2011 = () => {
    setVisible2011(!visible2011);
  }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Expériences" isHome={true} navigation={navigation}/>

{/* OVERLAY ACHETEUR FL  */}

        <Overlay isVisible={visible2019} width="auto" height="auto" onBackdropPress={toggleOverlay2019} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Acheteur Fruits et Légumes</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginLeft:5,}}>
              <Text style={{fontSize:12}}>Lieu : Rungis (94150)</Text>
              <Icon
                        name="map-marker"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
              <Text style={{fontSize:12}}>Type de contrat : CDI </Text>
              <Icon
                        name="file-text-o"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                          name="thumbs-o-up"
                          size={14}
                          color="red"
                          style={{marginRight:5}}
                        />
                <Text style={{fontSize:14}}>Mission principale: </Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>Achat et approvisionnement des fruits et légumes afin de servir les points de vente du groupe.</Text>
              </View>
              
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                            name="list"
                            size={14}
                            color="red"
                            style={{marginRight:5}}
                          />
                <Text>Tâches : </Text>
              </View>
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                    Analyse de l'offre et du marché des fruits et légumes au quotidien.
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Achats de fruits et légumes au niveau local, national et à l'international avec nos différents fournisseurs, producteurs et partenaires.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Négociation des prix, quantité et qualité dans le respect de la politique achat et commerciale définie par la direction.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Coordination des approvisionnements de nos fournisseurs et de la distribution vers les points de ventes.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Animation et gestion d'un portefeuille produits (sourcing, stratégie commerciale, définition du PV, respect des marges).
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Fiabiliser les relations avec nos partenaires et veiller à la qualité de la prestation.
                  </Text>
                </View>
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Sourcing de nouveaux fournisseurs et de nouveaux produits au niveau national et international.
                  </Text>
                </View>
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de relation entre la centrale et les magasins.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Overlay>

{/* OVERLAY DIRECTEUR ADJOINT VITRY */}

        <Overlay isVisible={visible2018} width="auto" height="auto" onBackdropPress={toggleOverlay2018} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Directeur Adjoint Supermarché</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginLeft:5,}}>
              <Text style={{fontSize:12}}>Lieu : Vitry Sur Seine (94400)</Text>
              <Icon
                        name="map-marker"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
              <Text style={{fontSize:12}}>Type de contrat : CDI </Text>
              <Icon
                        name="file-text-o"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                          name="thumbs-o-up"
                          size={14}
                          color="red"
                          style={{marginRight:5}}
                        />
                <Text style={{fontSize:14}}>Mission principale: </Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>
                  Responsable de la gestion humaine, matérielle et financière d’un supermarché alimentaire qui
                  dégage 1M€ de CA par semaine.
                </Text>
              </View>
              
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                            name="list"
                            size={14}
                            color="red"
                            style={{marginRight:5}}
                          />
                <Text>Tâches : </Text>
              </View>
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3,}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12,}}>
                    Gestion d'équipes, 60 collaborateurs répartis sur 5 secteurs.
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion des stocks, promotions et évènements selon les saisonnalités.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion financière du magasin.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Analyse et répondre aux attentes des clients particuliers et professionnels.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de relation entre la direction et les collaborateurs.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de recrutement.
                  </Text>
                </View>
               
                
              </View>
            </View>
          </View>
        </Overlay>

{/* OVERLAY DIRECTEUR ADJOINT PARIS */}

        <Overlay isVisible={visible2016} width="auto" height="auto" onBackdropPress={toggleOverlay2016} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Directeur Adjoint Supermarché</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginLeft:5,}}>
              <Text style={{fontSize:12}}>Lieu : Paris (75013)</Text>
              <Icon
                        name="map-marker"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
              <Text style={{fontSize:12}}>Type de contrat : CDI </Text>
              <Icon
                        name="file-text-o"
                        size={12}
                        color="red"
                        style={{marginLeft:3, marginRight:20}}
                      />
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                          name="thumbs-o-up"
                          size={14}
                          color="red"
                          style={{marginRight:5}}
                        />
                <Text style={{fontSize:14}}>Mission principale: </Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>
                  Responsable de la gestion humaine, matérielle et financière d’un supermarché alimentaire qui
                  dégage 300 000€ de CA par semaine.
                </Text>
              </View>
              
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                            name="list"
                            size={14}
                            color="red"
                            style={{marginRight:5}}
                          />
                <Text>Tâches : </Text>
              </View>
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3,}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12,}}>
                    Gestion d'équipes, 30 collaborateurs répartis sur 5 secteurs.
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion des stocks, promotions et évènements selon les saisonnalités.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion financière du magasin.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Analyse et répondre aux attentes des clients particuliers et professionnels.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de relation entre la direction et les collaborateurs.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de recrutement.
                  </Text>
                </View>
               
                
              </View>
            </View>
          </View>
        </Overlay>

{/* OVERLAY MANAGER MAGASIN ALTERNANCE */}

        <Overlay isVisible={visible2014} width="auto" height="auto" onBackdropPress={toggleOverlay2014} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Manager Magasin en alternance</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:10, marginLeft:5,}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:12}}>Lieu : Villejuif (94800)</Text>
                <Icon
                          name="map-marker"
                          size={12}
                          color="red"
                          style={{marginLeft:3, marginRight:20}}
                        />
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:12}}>Type de contrat : Contrat de professionnalisation </Text>
                  <Icon
                          name="file-text-o"
                          size={12}
                          color="red"
                          style={{marginLeft:3, marginRight:20}}
                        />
                </View>
                
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                          name="thumbs-o-up"
                          size={14}
                          color="red"
                          style={{marginRight:5}}
                        />
                <Text style={{fontSize:14}}>Mission principale: </Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>
                  Responsable de la gestion humaine, matérielle et financière du rayon PGC de 600m²
                </Text>
              </View>
              
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                            name="list"
                            size={14}
                            color="red"
                            style={{marginRight:5}}
                          />
                <Text>Tâches : </Text>
              </View>
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3,}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12,}}>
                    Gestion d'équipes, 5 collaborateurs répartis sur 3 univers.
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion des stocks, promotions et évènements selon les saisonnalités.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion financière du rayon.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Analyse et répondre aux attentes des clients particuliers et fournisseurs.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de relation entre la direction et les collaborateurs.
                  </Text>
                </View>

               
                
              </View>
            </View>
          </View>
        </Overlay>

{/* OVERLAY CHEF RAYON  */}

        <Overlay isVisible={visible2011} width="auto" height="auto" onBackdropPress={toggleOverlay2011} >
          <View style={{width:300}}>
            <View style={{alignItems:'center', height:40, borderBottomWidth:1, borderColor:'#ec9b3b', marginTop:5}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Chef de Rayon Epicerie</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:10, marginLeft:5,}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:12}}>Lieu : Villejuif (94800)</Text>
                <Icon
                          name="map-marker"
                          size={12}
                          color="red"
                          style={{marginLeft:3, marginRight:20}}
                        />
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:12}}>Type de contrat : Contrat de professionnalisation </Text>
                  <Icon
                          name="file-text-o"
                          size={12}
                          color="red"
                          style={{marginLeft:3, marginRight:20}}
                        />
                </View>
                
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                          name="thumbs-o-up"
                          size={14}
                          color="red"
                          style={{marginRight:5}}
                        />
                <Text style={{fontSize:14}}>Mission principale: </Text>
              </View>
              <View>
                <Text style={{padding:10, textAlign:'center', fontSize:12}}>
                  Responsable de la gestion humaine, matérielle et financière du rayon Epicerie de 600m²
                </Text>
              </View>
              
            </View>
            <View style={{marginTop:20, marginLeft:5}}>
              <View style={{flexDirection:'row'}}>
                <Icon
                            name="list"
                            size={14}
                            color="red"
                            style={{marginRight:5}}
                          />
                <Text>Tâches : </Text>
              </View>
              <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginBottom:3,}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12,}}>
                    Gestion d'équipes, 3 collaborateurs répartis sur 10 familles de produit.
                  </Text>
                </View>
                
                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion des stocks, promotions et évènements selon les saisonnalités.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Gestion financière du rayon.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Analyse et répondre aux attentes des clients particuliers et fournisseurs.
                  </Text>
                </View>

                <View style={{flexDirection:'row', marginBottom:3}}>
                  <Text style={{marginRight:10,}}>
                    - 
                  </Text>
                  <Text style={{fontSize:12}}>
                  Chargé de relation entre la direction et les collaborateurs.
                  </Text>
                </View>

               
                
              </View>
            </View>
          </View>
        </Overlay>


        <ScrollView>
            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:11}}>Sept 2019</Text>
                <Text style={{fontSize:11}}>-</Text>
                <Text style={{fontSize:11}}>Sept 2018</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity 
                style={{flexDirection:'row',}}
                onPress={() => {setVisible2019(true);}}>
                  
                  <Image source={require('../src/images/tf.jpg')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Acheteur Fruits et Légumes</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>TANG FRERES</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Rungis 94150</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:10}}>Sept 2018</Text>
                <Text style={{fontSize:10}}>-</Text>
                <Text style={{fontSize:10}}>Sept 2016</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity style={{flexDirection:'row',}}
                onPress={() => {setVisible2018(true);}}>
                  
                  <Image source={require('../src/images/tf.jpg')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Directeur Adjoint</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>TANG FRERES</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Vitry Sur Seine 94400</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:10}}>Sept 2016</Text>
                <Text style={{fontSize:10}}>-</Text>
                <Text style={{fontSize:10}}>Sept 2014</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity style={{flexDirection:'row',}}
                  onPress={() => {setVisible2016(true);}}
                >
                  
                  <Image source={require('../src/images/tf.jpg')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Directeur Adjoint</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>TANG FRERES</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Paris 75013</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:10}}>Sept 2014</Text>
                <Text style={{fontSize:10}}>-</Text>
                <Text style={{fontSize:10}}>Sept 2011</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity style={{flexDirection:'row',}}
                onPress={() => {setVisible2014(true);}}>
                  
                  <Image source={require('../src/images/casino.png')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Manager Magasin</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>CASINO SUPERMARCHE</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Villejuif 94800</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:10}}>Sept 2011</Text>
                <Text style={{fontSize:10}}>-</Text>
                <Text style={{fontSize:10}}>Sept 2010</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity style={{flexDirection:'row',}}
                onPress={() => {setVisible2011(true);}}>
                  
                  <Image source={require('../src/images/tf.jpg')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Chef de Rayon</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>TANG FRERES</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Pantin 93500</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection:'row'}}>
              <View style={styles.viewPoste}>
                <Text style={{fontSize:10}}>Sept 2010</Text>
                <Text style={{fontSize:10}}>-</Text>
                <Text style={{fontSize:10}}>Sept 2009</Text>
              </View>
              <View style={styles.cardPoste}>
                <TouchableOpacity style={{flexDirection:'row',}}>
                  
                  <Image source={require('../src/images/tf.jpg')}
                      style={styles.logo}/>
                  <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Employé Polyvalent</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>TANG FRERES</Text>
                    <Text style={{fontSize:12, marginLeft:10, fontStyle:'italic'}}>Vitry Sur Seine 94400</Text>
                  </View>
                      
                </TouchableOpacity>
              </View>
            </View>


          </ScrollView>
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    logo: {
      width:60,
      height:60,
      borderRadius:60,
      marginRight:10,
      marginLeft:10,
    },
    next:{
      width:30,
      height:50,
    },

    viewPoste:{
      flex:1,
      height:120,
      alignItems:'center', 
      justifyContent:'center', 
      margin:5
    },

    cardPoste : {
      backgroundColor:'white', 
      flex:4,  
      justifyContent:'center',
      borderBottomWidth:3,
      borderRightWidth:3,
      borderColor:'#e6e3df', 
      borderRadius:5 , 
      marginRight:10, 
      marginTop:5,
    }
    
  
})


  export default ExperiencesScreen