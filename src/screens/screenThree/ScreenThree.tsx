import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/headerCustom/CustomHeader';
const ScreenThree: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title='ScreenThree' navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>ScreenThree</Text>
                <Button onPress={() => navigation.navigate('Four')} title='GoScreenFour' />
            </View>
        </SafeAreaView>
    );
};

export default ScreenThree;