/**
 * Created by ponty on 10/04/2016.
 */
import React,{Component, StyleSheet, Dimensions} from 'react-native';
import {Actions, Scene, Router, TabBar,  Modal} from 'react-native-router-flux';



import LoginScreen from './containers/login-screen'
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
                    <Scene key="login_screen" component={LoginScreen} title="Login" hideNavBar={true}/>
                </Scene>
            </Router>
        )

    }
}