/**
 * Created by ponty on 20/04/2016.
 */

import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Dimensions,
    Image,
    ListView,
    ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: (height * 0.042),
        position:"relative",
        flexDirection:"column"
    },
    rowSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderBottomWidth:1,
        borderBottomColor:"#BBC3C8"
    },
    imageB: {
        height: 18,
        width:  18,
        margin: 5,
        alignSelf: "flex-start"
    },
    textHeader: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        fontFamily:"Proxima Nova Alt",
    },
    textAction: {
        textAlign: "center",
        marginTop: -3,
        fontSize: 35,
        color: "#46BD92"
    },
    navRow:{
        flexDirection:"row",
        marginTop:5
    },
    navText:{
        marginTop:5,
        color:"#46BD92"
    },
    content:{
        paddingLeft:5,
        paddingTop:20,
        height:(height * 0.75)
    },
    row:{
        flexDirection:"row",
        marginTop:10,
        marginLeft:8,
        marginRight:8,
        marginBottom:10,
        paddingBottom:5
    },
    column:{
        flex:1,
        flexDirection:"column"
    },
    dp:{
        height:46,
        width:46,
        borderRadius:23,
        marginTop:20
    },
    msgText:{
        backgroundColor:"#e5e5e5",
        padding:6,
        borderRadius:8,
        marginLeft:10,
        fontSize:14,
        textAlign:"center",
        fontFamily:"ProximaNovaA-Regular",
        lineHeight:20
    },
    datetime:{
        marginLeft:10,
        marginBottom:5,
        fontFamily:"ProximaNovaA-Regular",
        color:"#BBC3C8"
    },
    datetimeRight:{
        alignSelf:"flex-end",
        marginRight:10,
        marginBottom:5,
        fontFamily:"ProximaNovaA-Regular",
        color:"#BBC3C8"
    },
    msgTextRight:{
        backgroundColor:"#46BD96",
        padding:6,
        borderRadius:8,
        marginRight:6,
        fontSize:14,
        textAlign:"right",
        color:"#fff",
        fontFamily:"ProximaNovaA-Regular",
        lineHeight:20
    },
    action_img:{
        height:26,
        width:26
    },
    inline:{
        flexDirection:"row",
        padding:5,
        borderWidth:1,
        marginLeft:6,
        marginTop:5,
        borderRadius:8,
        borderColor:"#BBC3C8"
    },
    inlineRight:{
        flexDirection:"row",
        padding:5,
        borderWidth:1,
        marginRight:6,
        marginTop:5,
        borderRadius:8,
        borderColor:"#BBC3C8"
    },
    actionText:{
        fontSize:14,
        marginTop:5,
        marginLeft:10,
        fontFamily:"ProximaNovaA-Regular"
    },
    input:{
        borderTopColor:"#e5e5e5",
        borderTopWidth:1,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInput:{
        height:50,
        width:(width * 0.85),
        color:"#e8e8e8",
        fontFamily:"ProximaNovaA-Regular"
    },
    msgAction:{
        height:29,
        width:29,
        marginTop:13
    }
});

export default class Conversation extends Component {
    constructor(props){
        super(props)
        this.state = {text:""}
    }

    render(){
        return(
            <View style={styles.body}>
                <View style={styles.rowSpace}>
                    <TouchableHighlight
                        onPress={() => Actions.pop()}
                        underlayColor="#46BD96">
                        <View style={styles.navRow}>
                            <Image source={require('./../assets/images/group@3x.png')} style={styles.imageB}/>
                            <Text style={styles.navText}>Conversations</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.textHeader}>Kelso Kennedy</Text>
                    <Text style={styles.textAction}>+</Text>
                </View>
                <View style={styles.content}>

                    <View style={styles.row}>
                        <Image source={require('./../assets/images/jbhatab.png')} style={styles.dp}/>
                        <View style={styles.column}>
                            <Text style={styles.datetime}>5 Dic 22:30</Text>
                            <Text style={styles.msgText}>Hello Nicolas, I thought you would like to knondfnfdjfkndjfnjndfkndfnjdfndfnjkdfnjkdfnjfdknfdjkdfnjw that we've been finally working on...</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.datetimeRight}>5 Dic 22:30</Text>
                            <Text style={styles.msgTextRight}>Hello Nicolas, I thofddfdfd ndfndfnkfdnjkfdnjkfdnjkndfjknfdjknfdjkndfjkkdfndjkffddfdffdfdfddfdfdfdfdfdfdfdfdfdfdffdfdfddfdfdffddfdffdfdffdfught you would like to know that we've been finally working on...</Text>
                        </View>
                        <Image source={require('./../assets/images/jbhatab.png')} style={styles.dp}/>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('./../assets/images/jbhatab.png')} style={styles.dp}/>
                        <View style={styles.column}>
                            <Text style={styles.datetime}>5 Dic 22:30</Text>
                            <View style={styles.inline}>
                                <Image source={require('./../assets/images/phone.png')} style={styles.action_img}/>
                                <Text style={styles.actionText}>Keslo calvcvfdfdfeeerredfled you</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.datetimeRight}>5 Dic 22:30</Text>
                            <View style={styles.inlineRight}>
                                <Image source={require('./../assets/images/phone.png')} style={styles.action_img}/>
                                <Text style={styles.actionText}>You sent a voice note to bla bla bla</Text>
                            </View>
                        </View>
                        <Image source={require('./../assets/images/jbhatab.png')} style={styles.dp}/>
                    </View>

                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text:text})}
                        placeholder="Type a message"/>
                    <TouchableHighlight>
                        <Image source={require('./../assets/images/phone.png')} style={styles.msgAction}/>
                    </TouchableHighlight>
                </View>



            </View>
        )
    }
}
