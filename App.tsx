import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/login/home';    
import Diversos from './src/pages/login/diversos'; 
import Pesquisar from './src/pages/login/pesquisar'; 



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Diversos" component={Diversos} />
        <Stack.Screen name="Pesquisar" component={Pesquisar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


