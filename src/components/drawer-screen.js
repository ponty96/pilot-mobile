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

const sideBarActionsList = [
    {image:require('./../assets/images/conversation.png'), name:"Conversations", count:23, key:"conversation_screen"},
    {image:require('./../assets/images/trash.png'), name:"Trash", count:14},
    {image:require('./../assets/images/later.png'), name:"Later", count:2},
    {image:require('./../assets/images/archive.png'), name:"Archive", count:0},
    {image:require('./../assets/images/contacts.png'), name:"Contacts", count:23, key:"contacts_screen"},
    {image:require('./../assets/images/settings.png'), name:"Settings", count:null},
    {image:require('./../assets/images/jbhatab.png'), name:"Blaine Hatab", count:null}
]


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
                renderNavigationView={() => (<SideDrawer open={this.openDrawer}
                                                         close={this.closeDrawer}
                                                         routes={sideBarActionsList}
                                                         activeRouteId={this.props.activeRouteId}/>)}
                ref={'DRAWER_CONTROLLER'}>
                { this.props.children}
            </DrawerLayout>
        )
    }
}


Drawer.propTypes = {
    isOpen:PropTypes.bool.isRequired,
    activeRouteId: PropTypes.number.isRequired
};

Drawer.defaultProps = {
    isOpen:false,
    activeRouteId:0
};

