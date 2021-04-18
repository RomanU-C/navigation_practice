import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenOneStack from '../screenStack/ScreenOneStack';
import ScreenTwoStack from '../screenStack/ScreenTwoStack';
import ScreenThreeStack from '../screenStack/ScreenThreeStack';
import ScreenFourStack from '../screenStack/ScreenFourStack';
import ScreenSpalch from '../../screens/SplashPlus';
import { Image } from 'react-native';
import CustomButtonPlus from './CustomTabButton';
import CustomTab from './CustomTab';
import { imagesPatch } from '../../assets/img/imgPatch';


const BottomTab: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 15,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#f1e4de',
                height: 70,
                borderRadius: 8
            }
        }}>
            <Tab.Screen name="One" component={ScreenOneStack} options={{
                tabBarIcon:
                    ({ focused }: any) => (
                        <CustomTab focused={focused} title='One' img={imagesPatch.homeWhite} />
                    )
            }} />
            <Tab.Screen name="Two" component={ScreenTwoStack}
                options={{
                    tabBarIcon:
                        ({ focused }: any) => (
                            <CustomTab focused={focused} title='Two' img={imagesPatch.searchWhite} />
                        )
                }} />
            <Tab.Screen name="SplashPlus" component={ScreenSpalch}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../../assets/img/plusDarck.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />),
                    tabBarButton: (props: any) => (
                        <CustomButtonPlus {...props} />
                    )
                }} />
            <Tab.Screen name="Three" component={ScreenThreeStack}
                options={{
                    tabBarIcon:
                        ({ focused }: any) => (
                            <CustomTab focused={focused} title='Three' img={imagesPatch.settingsWhite} />
                        )
                }} />
            <Tab.Screen name="Four" component={ScreenFourStack}
                options={{
                    tabBarIcon:
                        ({ focused }: any) => (
                            <CustomTab focused={focused} title='Four' img={imagesPatch.chatWhite} />
                        )
                }} />
        </Tab.Navigator>
    );
};

export default BottomTab;