import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Camera from 'react-native-vector-icons/MaterialCommunityIcons';
Camera.loadFont()
import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont()
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()

export function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.child1} 
              onPress={() => navigation.navigate('Profile')}>
              <User name="user" size={25} color="black"></User>
              <Text>Perfil </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.child1} 
              onPress={() => navigation.navigate('Video')}>
              <Camera name="camera" size={25} color="black"></Camera>
              <Text>Câmera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.child1} 
                    onPress={() => { BackHandler.exitApp()}}>
                    <Exit name="sign-out" size={25} color="black"></Exit> 
                    <Text>Sair</Text>      
                </TouchableOpacity>
            
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },

 child1: {
    backgroundColor:'lightgray',
    shadowColor: '#DEDEDE',
    alignItems: 'center',
  
    width: 150,
    height: 100,
    shadowOpacity: 0.0,
    shadowRadius: 3,
    shadowOffset:  { width: 0, height: 2 },
    elevation: 5,
    padding:30,
    margin: 20,
    
  },
  });