import React from 'react';
import {View, Text, StyleSheet, Image, Button, } from 'react-native';

export function Profile() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
           style={{width: 250, height: 200}}
           source={require('../../assets/eu.jpg')} 
           />

        
        <Text style={{fontSize: 16}}>Renan Schueroff Araujo</Text>
        <Text style={{fontSize: 16}}>19</Text>
        
        <Text style={{fontSize: 16}}>Curso técnico de informatica</Text>
        <Text>{"\n"}</Text>
        <Text style={{fontSize: 16}}>Tecnologias e Linguagens</Text>
        <Text style={{ fontSize: 16}}>Java,Python,Html</Text>
        <Text>{"\n"}</Text>
        <Text style={{fontSize: 16}}>Plataformas</Text>
        <Text style={{fontSize: 16}}>VsStudio,Pycharm,Vscode,Intellij</Text>
        <Text>{"\n"}</Text>
        <Text style={{fontSize: 16}}>Eu gostaria de trabalhar com:</Text>
        <Text style={{fontSize: 16}}>Arquitetura de Hardware e Engenharia de software:</Text>
        


        

        
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
      width: 300,
      height: 170,
      margin: 15,
      borderRadius: 6,
      alignItems: "center",
    },

    child1: {
      backgroundColor:'#FAFAFA',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: '#FAFAFA',
      elevation: 2,
      paddingTop: 60,
      width: 300,
      height: 250

    }, 
    });
