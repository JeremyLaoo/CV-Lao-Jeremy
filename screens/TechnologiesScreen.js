import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


import CustomHeader from './CustomHeader'

function TechnologiesScreen({navigation}) {

const tech = [
  {name: 'JavaScript', image: require('../src/images/javascript.png')}
]

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Technologies" isHome={true} navigation={navigation}/>

          <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'white', alignItems: 'center' }}>

              <View style={{marginBottom:20,}} >
                <View style={{ marginTop:10, marginBottom:5, flexDirection:'row', alignItems:'center',}}>
                  <Icon name="caret-right" size={20} color="black"/>
                  <Text style={{fontSize:28, fontWeight:'bold', color:'#ec9b3b', marginLeft:5, }}>Front-end</Text>
                </View>
                

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/html5.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>HTML5</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/css3.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>CSS3</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/bootstrap.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>BootStrap</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/javascript.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>JavaScript</Text>
                  </View>
                </View>
                
                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/react.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>React</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/redux.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Redux</Text>
                  </View>
                </View>

              </View>

              <View>
                <View style={{ marginTop:20, marginBottom:5, flexDirection:'row', alignItems:'center'}}>
                  <Icon name="caret-right" size={20} color="black"/>
                  <Text style={{fontSize:28, fontWeight:'bold', color:'#ec9b3b', marginLeft:5, }}>Back-end</Text>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/nodejs.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Node JS</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/express.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Express JS</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/mongodb.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Mongo DB</Text>
                  </View>
                </View>

              </View>

              <View>
                <View style={{ marginTop:20, marginBottom:5, flexDirection:'row', alignItems:'center'}}>
                  <Icon name="caret-right" size={20} color="black"/>
                  <Text style={{fontSize:28, fontWeight:'bold', color:'#ec9b3b', marginLeft:5, }}>Mobile</Text>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/reactnative.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>React Native</Text>
                  </View>
                </View>

              </View>

              <View>
                <View style={{ marginTop:20, marginBottom:5, flexDirection:'row', alignItems:'center'}}>
                  <Icon name="caret-right" size={20} color="black"/>
                  <Text style={{fontSize:28, fontWeight:'bold', color:'#ec9b3b', marginLeft:5, }}>Workflow</Text>
                </View>

                <View style={{flexDirection:'row',  width:300, alignItems:'center', marginTop:10, }}>
                  <View style={{flex:1, backgroundColor:'white'}}>
                    <Image source={require('../src/images/git.png')}
                    style={{width:60, height:60, borderRadius:60}}/>
                  </View>
                  <View style={{flex:3,backgroundColor:'white', height:60, borderBottomWidth:1, borderColor:'#e6e3df', justifyContent:'center'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>GitHub</Text>
                  </View>
                </View>
              </View>


              

              

              

              


              

              

              

              

              

              



            </View>
          </ScrollView>

       
        
      </SafeAreaView>
    );
  }


  export default TechnologiesScreen