/**
 * Created by ponty on 14/04/2016.
 */
import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import Drawer from '../components/drawer-screen'
export default class ContactScreen extends Component {
    render(){
        return (
            <Drawer>
                <View>
                    <Text>Contact screen</Text>
                </View>
            </Drawer>

        )
    }
}