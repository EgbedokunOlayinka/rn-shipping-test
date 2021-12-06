import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/home';
import Connect from './src/views/connect';
import Details from './src/views/details';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Connect' component={Connect} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
