import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenOneStack from '../screenStack/ScreenOneStack';
import ScreenTwoStack from '../screenStack/ScreenTwoStack';

const BottomTab: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="One" component={ScreenOneStack} />
            <Tab.Screen name="Two" component={ScreenTwoStack} />
        </Tab.Navigator>
    );
};

export default BottomTab;