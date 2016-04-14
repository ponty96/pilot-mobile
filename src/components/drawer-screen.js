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
    Dimensions,
    DrawerLayoutAndroid
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';
import SideDrawer from './side-drawer';
import {DefaultRenderer} from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

export default class Drawer extends Component {
    render() {
        return (
            <DrawerLayout
                drawerWidth={width}
                drawerPosition={DrawerLayout.positions.Left}
                drawerLockMode="unlocked"
                renderNavigationView={() => (<SideDrawer />)}>
                { this.props.children}
            </DrawerLayout>
        )
    }
}