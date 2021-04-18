import * as React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CustomButtonPlus({ children, onPress }: any) {
    return (
        <TouchableOpacity style={{
            // 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
            onPress={onPress}>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 35,
                backgroundColor: '#0b7fab',
            }}>
                {children}
            </View>
        </TouchableOpacity>

    );
}