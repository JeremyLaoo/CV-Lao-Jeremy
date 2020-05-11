import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Provider} from 'react-redux';
import message from './reducers/message';
import {createStore, combineReducers}  from 'redux';

import Ionicons from 'react-native-vector-icons/FontAwesome5';


import AboutMeScreen from './screens/AboutMeScreen'
import ContactScreen from './screens/ContactsScreen'
import CustomDrawerContent from './screens/CustomDrawerContent'
import CustomHeader from './screens/CustomHeader'
import DocumentScreen from './screens/DocumentsScreen'
import ExperiencesScreen from './screens/ExperiencesScreen'
import FormationsScreen from './screens/FormationsScreen'
import ProfilScreen from './screens/ProfilScreen'
import ProjetsScreen from './screens/ProjetsScreen'
import TechnologiesScreen from './screens/TechnologiesScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen';


const store = createStore (combineReducers({message}));

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home DETAILS!</Text>
        
      </View>
      
    </SafeAreaView>
  );
}
function SettingsScreendetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting detail" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting >Detail!</Text>
        
      </View>
      
    </SafeAreaView>
  );
}




const navOptionHandler = () => ({
  headerShown: false
})

const StackProfil = createStackNavigator();
function ProfilStack(){
  return(
    <StackProfil.Navigator initialRouteName="Home">
      <StackProfil.Screen name="Profil" component={ProfilScreen} options={navOptionHandler}/>
      <StackProfil.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackProfil.Navigator>
  )
}

const StackProjet = createStackNavigator();
function ProjetStack(){
  return(
    <StackProjet.Navigator initialRouteName="Home">
      <StackProjet.Screen name="Projet" component={ProjetsScreen} options={navOptionHandler}/>
      <StackProjet.Screen name="SettingDetail" component={SettingsScreendetail} options={navOptionHandler}/>
    </StackProjet.Navigator>
  )
}
const StackFormation = createStackNavigator();
function FormationStack(){
  return(
    <StackFormation.Navigator initialRouteName="Home">
      <StackFormation.Screen name="Formation" component={FormationsScreen} options={navOptionHandler}/>
      
    </StackFormation.Navigator>
  )
}
const StackExperience = createStackNavigator();
function ExperienceStack(){
  return(
    <StackExperience.Navigator initialRouteName="Home">
      <StackExperience.Screen name="Experience" component={ExperiencesScreen} options={navOptionHandler}/>
      
    </StackExperience.Navigator>
  )
}
const StackTechnologie = createStackNavigator();
function TechnologieStack(){
  return(
    <StackTechnologie.Navigator initialRouteName="Home">
      <StackTechnologie.Screen name="Technologie" component={TechnologiesScreen} options={navOptionHandler}/>
      
    </StackTechnologie.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function TabNavigator(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'Profil') {
              iconName = 'user';
            } else if (route.name === 'Projets') {
              iconName = 'github';
            } else if (route.name === 'Formations') {
              iconName = 'graduation-cap';
            } else if (route.name === 'Experiences') {
              iconName = 'file-signature';
            } else if (route.name === 'Technologies') {
              iconName = 'react';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ec9b3b',
          inactiveTintColor: '#FFF',
          style:{
            backgroundColor: '#00818a',
            height: 60,
            padding:10},
        }}
      >
        <Tab.Screen name="Profil" component={ProfilStack} />
        <Tab.Screen name="Projets" component={ProjetStack} />
        <Tab.Screen name="Formations" component={FormationStack} />
        <Tab.Screen name="Experiences" component={ExperienceStack} />
        <Tab.Screen name="Technologies" component={TechnologieStack} />
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return(
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={CustomDrawerContent}
    
    drawerContentOptions={{
      activeTintColor: '#ec9b3b',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#ec9b3b',
      inactiveBackgroundColor:'#FFF',
    }}
    >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="AboutMe" component={AboutMeScreen} />
        <Drawer.Screen name="Documents" component={DocumentScreen} />
        <Drawer.Screen name="Contacts" component={ContactScreen} />
    </Drawer.Navigator>
  )
  
}

const StackApp = createStackNavigator();
function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="Welcome">
          <StackApp.Screen name="Welcome" component={WelcomeScreen} options={navOptionHandler}/>
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="MapScreen" component={MapScreen} options={navOptionHandler}/>
        </StackApp.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}





export default App