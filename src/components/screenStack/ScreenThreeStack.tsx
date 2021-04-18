import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenThree from '../../screens/screenThree/ScreenThree';


const StackOne = createStackNavigator();

const ScreenThreeStack = () => {
  return (
      <StackOne.Navigator screenOptions={{headerShown: false}}>
        <StackOne.Screen  name="Three" component={ScreenThree} />
      </StackOne.Navigator>
  );
}

export default ScreenThreeStack;