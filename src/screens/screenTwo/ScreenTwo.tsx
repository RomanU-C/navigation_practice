import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/headerCustom/CustomHeader';

const ScreenTwo: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title='ScreenTwo' navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>ScreenTwo</Text>
                <Button onPress={() => navigation.navigate('Three')} title='GoScreenThree' />
            </View>
        </SafeAreaView>
    );
};

export default ScreenTwo;