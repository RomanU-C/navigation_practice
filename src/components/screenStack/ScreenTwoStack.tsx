import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenTwo from '../../screens/screenTwo/ScreenTwo';


const StackTwo = createStackNavigator();

const ScreenTwoStack = () => {
  return (
      <StackTwo.Navigator screenOptions={{headerShown: false}}>
        <StackTwo.Screen name="Two" component={ScreenTwo} />
      </StackTwo.Navigator>
  );
}

export default ScreenTwoStack;