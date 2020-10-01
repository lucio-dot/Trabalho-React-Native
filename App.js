// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableHighlight,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function HomeScreen1({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center',}}>
      <Image
       style = {{
         width: 350,
         height: 400,
       }}
       source={require('./src/images/ubereats.png')}

      />
      <TouchableHighlight
      
        onPress={() =>navigation.navigate('Home')}
        style={{
          backgroundColor: '#3555b6',
          marginHorizontal: 30,
          marginTop: 30,
          padding: 10,
          borderRadius: 10,
        }}>
          <Text style={{fontSize: 18, alignSelf: 'center', margin: 5}}>
          Login
          </Text> 
      </TouchableHighlight>
    </View>
  );
}

function HomeScreen2({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center',}}>
       <Image
         style = {{
           width: 350,
           height: 400,
         }}
       
           source={require('./src/images/ubereats2.png')}
         />
         <TouchableHighlight
           
          onPress={() =>navigation.navigate('Home')}
          style={{
          backgroundColor: '#3555b6',
          marginHorizontal: 30,
          marginTop: 30,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, alignSelf: 'center', margin: 5}}>
          Comprar
        </Text> 
      </TouchableHighlight>

    </View>
  );
}
    
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={HomeScreen1} />
      <Stack.Screen name="Home" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;