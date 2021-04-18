import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/headerCustom/CustomHeader';
const ScreenSpalch: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title='ScreenSpalch' navigation={navigation}/>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
                <Text>ScreenSplachPlus</Text>
            </View>
        </SafeAreaView>
    );
};

export default ScreenSpalch;