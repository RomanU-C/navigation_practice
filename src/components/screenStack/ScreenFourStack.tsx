import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenFour from '../../screens/screenFour/ScreenFour';


const StackOne = createStackNavigator();

const ScreenFourStack = () => {
  return (
      <StackOne.Navigator screenOptions={{headerShown: false}}>
        <StackOne.Screen  name="Four" component={ScreenFour} />
      </StackOne.Navigator>
  );
}

export default ScreenFourStack;