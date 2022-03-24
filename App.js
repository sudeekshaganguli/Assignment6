import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawnavigator from './src/Navigation/drawernavigator';

export default function App() {
  return (
    <NavigationContainer>
       <Drawnavigator/>
    </NavigationContainer>
  );
}
