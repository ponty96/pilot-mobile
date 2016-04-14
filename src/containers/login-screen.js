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

import { Actions } from 'react-native-router-flux' //for routing and stuffs

const { width, height } = Dimensions.get('window');
const marginTop = height - (height * 0.80);

const styles = StyleSheet.create({
    pushedBlock:{
        marginTop:marginTop,
        flex:1
    },
    form:{
        marginTop:marginTop
    },
    block:{
        marginTop:30
    },
    boldText:{
        fontSize:36,
        fontWeight:"bold",
        textAlign:"center"
    },
    inlineBlock:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20
    },
    textInput:{
        borderWidth:1,
        borderColor:"#e5e5e5",
        borderRadius:5,
        height:42,
        width:(width * 0.9),
        alignSelf:"center",
        padding:5,
        paddingLeft:10,
        marginBottom:15,
        color:"#e5e5e5"
    },
    searchButton : {
        width:(width * 0.9),
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        marginLeft:10,
        marginRight:10,
        height:42,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:"#1abc9c",
        borderColor:"#1abc9c",
        borderWidth:1,
        borderRadius:5
    },
    search_btn_text:{
        color:"#fff",
        fontSize:17
    },
    textGreen:{
        textAlign:"center",
        color:"#1abc9c",
        fontWeight:"300"
    },
    textGrey:{
        textAlign:"center",
        color:"#95a5a6",
        fontWeight:"300",
        marginRight:10
    }
})

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailAddress:"",
            password:""
        }
    }

    onSignIn(){
        //dispatch login action here
        // for now just route
        const email =  this.state.emailAddress;
        const password =  this.state.password;
        console.log('clicked')
        Actions.contact_screen()
    }
    render(){
        return (
            <View style={styles.pushedBlock}>
                <Text style={styles.boldText}>Pilot</Text>
                <View style={styles.form}>
                    <View>
                        <TextInput
                            placeholder="Email Address"
                            text={this.state.emailAddress}
                            onChangeText={(text) => this.setState({emailAddress:text})}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Password"
                            text={this.state.password}
                            onChangeText={(text) => this.setState({password:text})}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <TouchableHighlight
                            style={styles.searchButton}
                            underlayColor="#ccc"
                            onPress={() => this.onSignIn()}>
                            <Text style={styles.search_btn_text}>Sign In</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.textGreen}>Forgot your username or password?</Text>
                        <View style={styles.inlineBlock}>
                            <Text style={styles.textGrey}>Don't have an account?</Text>
                            <Text style={styles.textGreen}>Sign UP</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}
