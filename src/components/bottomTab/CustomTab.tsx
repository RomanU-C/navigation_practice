import * as React from 'react';
import { Animated, Image, Text, View } from 'react-native';



const CustomTab = ({ focused, title, img }: any) => {
    return (

        <Animated.View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {!focused ? <Image source={img}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e9723d' : '#7c7b89',
                }}
            /> : <Text style={{ color: '#e9723d', fontSize: 12 }}>{title}</Text>}


        </Animated.View>
    );
}


export default CustomTab;