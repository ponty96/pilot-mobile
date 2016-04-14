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
    DrawerLayoutAndroid,
    PropTypes
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';
import SideDrawer from './side-drawer';
import {DefaultRenderer} from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

export default class Drawer extends Component {
    openDrawer = () => {
        this.refs['DRAWER_CONTROLLER'].openDrawer()
    }
    closeDrawer = () => {
        this.refs['DRAWER_CONTROLLER'].closeDrawer()
    }
    componentDidUpdate(){
        const isOpen = this.props.isOpen;
        if(isOpen == true){
            this.openDrawer()
        } else {
           this.closeDrawer();
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.isOpen != this.props.isOpen
    }
    render() {
        return (
            <DrawerLayout
                drawerWidth={width}
                drawerPosition={DrawerLayout.positions.Left}
                drawerLockMode="unlocked"
                renderNavigationView={() => (<SideDrawer open={this.openDrawer} close={this.closeDrawer}/>)}
                ref={'DRAWER_CONTROLLER'}>
                { this.props.children}
            </DrawerLayout>
        )
    }
}


Drawer.propTypes = {
    isOpen:PropTypes.bool.isRequired
}

Drawer.defaultProps = {
    isOpen:false
}

