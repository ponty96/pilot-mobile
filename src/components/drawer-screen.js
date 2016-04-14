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

export default class Drawer extends Component {
    render() {
        return (
            <DrawerLayout
                drawerWidth={300}
                drawerPosition={DrawerLayout.positions.Left}
                drawerLockMode="unlocked"
                renderNavigationView={() => (<SideDrawer />)}>
                { this.props.children}
            </DrawerLayout>
        )
    }
}