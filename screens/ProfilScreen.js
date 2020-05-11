import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';


import CustomHeader from './CustomHeader'

function ProfilScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'#ec9b3b' }}>
        <CustomHeader title="Profil" isHome={true} navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <View style={{ padding:10,   }}>
            <Text style={{fontSize:26, width:320,  textAlign:'center', fontWeight:'bold', }}>Recherche un contrat en alternance au poste de</Text>
            <Text style={{fontSize:26, width:320,  textAlign:'center', fontWeight:'bold'}}>Développeur Web Junior</Text>
          </View>
          <Text style={{width:200, color:'#ec9b3b', textAlign:'center', fontWeight:'bold', paddingBottom:20, borderBottomWidth:2, borderColor:'white' }}>Check</Text>


          <View style={{width:320, marginTop:40}}>
            <Text style={{fontStyle:'italic', textAlign:'center', fontSize:16}}>
              "A travers mes différentes expériences professionnelles j’ai pu acquérir une 
              <Text style={{fontWeight:'bold', fontSize:18}}> autonomie </Text> 
              dans mon travail et développer diverses compétences comme la 
              <Text style={{fontWeight:'bold', fontSize:18}}> créativité </Text>
              pour accroitre le chiffre d’affaires ; du 
              <Text style={{fontWeight:'bold', fontSize:18}}> management </Text>
              pour encadrer les équipes et de 
              <Text style={{fontWeight:'bold', fontSize:18}}> l’organisation </Text>
               ainsi que du 
              <Text style={{fontWeight:'bold', fontSize:18}}> travail d’équipe </Text>
              pour le bon développement du magasin. 
              Des compétences que je saurai mettre à profit dans mon nouvel environnement qui est le développement web."
            </Text>
            <Text style={{textAlign:'right'}}> Jérémy Lao.</Text>
          </View> 
          
        





        </View>
      </SafeAreaView>
    );
  }


  export default ProfilScreen