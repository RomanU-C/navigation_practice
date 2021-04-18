import * as React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawerContent = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <TouchableOpacity style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}
                    onPress={() => props.navigation.navigate('One')}>
                    <Text>ScreenOne</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}
                    onPress={() => props.navigation.navigate('Two')}>
                    <Text>ScreenTwo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}
                    onPress={() => props.navigation.navigate('Three')}>
                    <Text>ScreenThree</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}
                    onPress={() => props.navigation.navigate('Four')}>
                    <Text>ScreenFour</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CustomDrawerContent