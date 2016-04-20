/**
 * Created by ponty on 10/04/2016.
 */
import React,{Component, StyleSheet, Dimensions} from 'react-native';
import {Actions, Scene, Router, TabBar,  Modal} from 'react-native-router-flux';



import LoginScreen from './containers/login-screen'
import ContactScreen from './containers/contact-screen'
import ConversationsScreen from './containers/conversations-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tabBarStyle:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#95a5a6",
        padding:0,
        height:45
    },
    sceneStyle : {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection:"column"
    }
})

export default class PilotApp extends Component {
    render(){
        return (
            <Router style={styles.container} sceneStyle={styles.sceneStyle}>
                <Scene key="root">
                    <Scene key="conversation_screen" component={ConversationsScreen} title="Conversations" hideNavBar={true}/>
                    <Scene key="login_screen" component={LoginScreen} title="Login" hideNavBar={true}/>

                    <Scene key="contacts_screen" component={ContactScreen} title="Contact" hideNavBar={true}/>
                </Scene>
            </Router>
        )

    }
}