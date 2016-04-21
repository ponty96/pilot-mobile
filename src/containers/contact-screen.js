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
        borderBottomColor:"#BBC3C8",
        marginTop:12
    },
    imageB: {
        height: 32,
        width: 32,
        margin: 5,
        alignSelf: "flex-start"
    },
    textHeader: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        fontFamily:"ProximaNovaA-Regular"
    },
    textAction: {
        textAlign: "center",
        marginTop: 10,
        marginRight:5,
        fontSize: 16,
        color: "#46BD92"
    },
    content:{
        paddingLeft:5,
        paddingTop:20,
        height:(height * 0.75)
    },
    row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        paddingLeft:0
    },
    textRow:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        marginRight:(width * 0.15)
    },
    column:{
        flex:1,
        flexDirection:"column",
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
        marginLeft:15,
        marginRight:10
    },
    colBlock:{
        flex:1,
        flexDirection:"column",
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
        marginLeft:15,
        marginRight:10,
        paddingTop:20,
        paddingBottom:20
    },
    navRow:{
        flexDirection:"row"
    },
    navText:{
        marginTop:12,
        color:"#46BD92"
    },
    dp:{
        height:100,
        width:100,
        borderRadius:50
    },
    centralBlock:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        marginTop:40
    },
    contactName:{
        fontSize:18,
        marginTop:20,
        fontFamily:"Proxima Nova Alt",
        fontWeight:"500"
    },
    actionRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:80,
        marginTop:8
    },
    msgAction:{
        height:29,
        width:29
    },
    text:{
        fontSize:18,
        fontFamily:"ProximaNovaA-Regular"
    },
    smallText:{
        fontSize:14,
        marginTop:4,
        fontFamily:"ProximaNovaA-Regular"
    },
    redText:{
        fontSize:18,
        color:"red",
        fontFamily:"ProximaNovaA-Regular"
    },
    delBlock:{
        flex:1,
        flexDirection:"column",
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
        borderTopWidth:1,
        borderTopColor:"#e5e5e5",
        marginLeft:15,
        marginRight:10,
        paddingTop:20,
        paddingBottom:20,
        marginTop:80,
    }
})

export default class ContactScreen extends Component {
    render(){
        return (
            <View>
                <View style={styles.rowSpace}>
                    <TouchableHighlight
                        onPress={() => Actions.pop()}
                        underlayColor="#46BD96">
                        <View style={styles.navRow}>
                            <Image source={require('./../assets/images/menu-alt-512.png')} style={styles.imageB}/>
                            <Text style={styles.navText}>All Contacts</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.textAction}>Edit</Text>
                </View>
                <View style={styles.centralBlock}>
                    <Image source={require('./../assets/images/jbhatab.png')} style={styles.dp}/>
                    <Text style={styles.contactName}>Blaine Hatab</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <View style={styles.textRow}>
                            <Text style={styles.smallText}>Work</Text>
                            <Text style={styles.text}>261 3067 331</Text>
                        </View>
                        <View style={styles.actionRow}>
                            <TouchableHighlight>
                                <Image source={require('./../assets/images/conversation.png')} style={styles.msgAction}/>
                            </TouchableHighlight>
                            <TouchableHighlight>
                                <Image source={require('./../assets/images/phone.png')} style={styles.msgAction}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.textRow}>
                            <Text style={styles.smallText}>Home</Text>
                            <Text style={styles.text}>261 3067 331</Text>
                        </View>
                        <View style={styles.actionRow}>
                            <TouchableHighlight>
                                <Image source={require('./../assets/images/conversation.png')} style={styles.msgAction}/>
                            </TouchableHighlight>
                            <TouchableHighlight>
                                <Image source={require('./../assets/images/phone.png')} style={styles.msgAction}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={styles.colBlock}>
                    <Text style={styles.text}>
                        nico@redstamp.ca
                    </Text>
                </View>
                <View style={styles.colBlock}>
                    <Text style={styles.text}>
                        Terrada 3091 Lujan de Cuyo. Mza.
                    </Text>
                </View>
                <TouchableHighlight style={styles.delBlock}>
                    <Text style={styles.redText}>
                        Delete Contact
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }
}
