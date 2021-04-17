import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenTwoStack from './screenStack/ScreenTwoStack';
import BottomTab from './bottomTab/BottomTab';
import CustomDrawerContent from './darwerNav/CustomDrawerContent'

export default function Root() {
const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={BottomTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}