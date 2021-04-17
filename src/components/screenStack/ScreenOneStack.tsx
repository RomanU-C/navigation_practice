import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../../screens/screenOne/ScreenOne';


const StackOne = createStackNavigator();

const ScreenOneStack = () => {
  return (
      <StackOne.Navigator screenOptions={{headerShown: false}}>
        <StackOne.Screen  name="One" component={ScreenOne} />
      </StackOne.Navigator>
  );
}

export default ScreenOneStack;