import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomHeader = ({ navigation, title }: any) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#000' }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{
                flex: 1, justifyContent: 'center',
                alignItems: 'flex-start', paddingLeft: 8
            }}><Image style={{ width: 30, height: 30 }}
                source={require('./../../assets/img/menu.png')}
                /></TouchableOpacity>
            <View style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Text style={{ color: '#fff' }}>{title}</Text></View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export default CustomHeader