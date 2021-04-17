import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/headerCustom/CustomHeader';
const ScreenOne: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title='ScreenOne' navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>ScreenOne</Text>
                <Button onPress={() => navigation.navigate('Two')} title='GoScreenTwo' />
            </View>
        </SafeAreaView>
    );
};

export default ScreenOne;