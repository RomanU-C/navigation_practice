import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/headerCustom/CustomHeader';

const ScreenFour: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title='ScreenFour' navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>ScreenFour</Text>
                <Button onPress={() => navigation.navigate('One')} title='GoBackOne' />
            </View>
        </SafeAreaView>
    );
};

export default ScreenFour;