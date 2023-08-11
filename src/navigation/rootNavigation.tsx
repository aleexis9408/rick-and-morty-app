// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterListScreen from '../screen/characterListScreen';
import OriginScreen from '../screen/originScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CharacterList"
          component={CharacterListScreen}
          options={{title: 'Character List'}}
        />
        <Stack.Screen
          name="Origin"
          component={OriginScreen}
          options={{title: 'Origin Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
