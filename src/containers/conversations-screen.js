/**
 * Created by ponty on 15/04/2016.
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

import Swipeout from 'react-native-swipeout'

import Drawer from '../components/drawer-screen';
import SearchBar from 'react-native-search-bar'
const { width, height } = Dimensions.get('window');

const dummy_conversations = [
    {
        contact_dp:"https://pbs.twimg.com/profile_images/689743404025122817/zz1j-bC2_bigger.png",
        contact_name:"Josh Kopelman",
        last_msg:"Hello Nigga",
        last_activity_time:"Today, 20:35",
        conversation_id:""
    },
    {
        contact_dp:"https://pbs.twimg.com/profile_images/713824230371160065/v4_qWjqn_bigger.jpg",
        contact_name:"Thriller",
        last_msg:"WTF dude!!!",
        last_activity_time:"Today, 20:22",
        conversation_id:""
    },
    {
        contact_dp:"https://pbs.twimg.com/profile_images/553711083064541184/9VsY9i09_bigger.jpeg",
        contact_name:"James Long",
        last_msg:"You fucking slept with my girlfriend",
        last_activity_time:"Yesterday, 20:35",
        conversation_id:""
    },
    {
        contact_dp:"https://pbs.twimg.com/profile_images/622146266823155712/RjmeRIOn_bigger.jpg",
        contact_name:"Dan Abramov",
        last_msg:"I love redux, Do IT EVERY DAY!!!!!",
        last_activity_time:"Yesterday, 03:35",
        conversation_id:""
    },
    {
        contact_dp:"https://pbs.twimg.com/profile_images/639314683/vjeux-twitter_bigger.PNG",
        contact_name:"Aaron Ackerman",
        last_msg:"BLA BLA BLA BLA BLA BLA BLA BLA; Its whatever",
        last_activity_time:"Yesterday, 20:35",
        conversation_id:""
    }
]

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: (height * 0.042)
    },
    rowSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    },
    imageB: {
        height: 32,
        width: 32,
        margin: 5,
        alignSelf: "flex-start"
    },
    textHeader: {
        textAlign: "center",
        marginTop: 12,
        fontSize: 18,
        fontWeight: "bold",
        color:"#525455"
    },
    textAction: {
        textAlign: "center",
        marginTop: -3,
        fontSize: 35,
        color: "#46BD96"
    },
    textInput:{
        borderWidth:1,
        borderColor:"#ccc",
        backgroundColor:"#ccc",
        height:30,
        width:(width * 0.9),
        alignSelf:"center",
        marginBottom:15,
        color:"#666",
        textAlign:"center",
        marginTop: 7.5
    },
    rowContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
        padding:15,
        flexDirection:"row"
    },
    gridContainer: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 10,
        paddingLeft:10
    },
    row:{
        flex:1,
        flexDirection:"row",
        alignItems:"stretch",
        justifyContent:"space-between",
        alignSelf:"center",
        width:(width * 0.76),
        marginTop:5

    },
    dp: {
        height: 50,
        width: 50,
        margin: 5,
        alignSelf: "flex-start",
        borderRadius:25
    },
    btnIcon:{
        height: 30,
        width: 30,
        alignSelf: "center",
        marginTop:24
    },
    name: {
        fontSize:18,
        color:"#868788",
        fontWeight:"bold"
    },
    time: {
        fontSize:13,
        color:"#E0E6EA",
        marginTop:2.5
    },
    last_msg:{
        marginTop:10,
        color:"#868788"
    }

});



export default class ConversationsScreen extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

        this.state = {
            navigationOpen: false,
            searchText:"",
            conversations:ds,
            scrollEnabled: true
        }


    }

    componentWillMount(){
        this.setState({
            conversations: this.state.conversations.cloneWithRows(dummy_conversations)
        })
    }

    call = ({name,id}) => {
        console.log('call', {name,id})
    }

    viewContact =  ({name,id}) => {
        console.log('view', {name,id})
    }

    saveForLater = ({name,id}) => {
        console.log('call', {name,id})
    }

    archiveConvo =  ({name,id}) => {
        console.log('view', {name,id})
    }

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
       const swipeRightButtons = [
            {
                text:'Call',
                backgroundColor:"#4ABD92",
                underlayColor:"#4ABD92",
                onPress:this.call({name:rowData.name,id:rowID}),
                component: <Image style={{flex: 1}} source={require('./../assets/images/phone.png')} style={styles.btnIcon}/>

            },
            {
                text:'Contact',
                backgroundColor:"#C469D7",
                underlayColor:"#C469D7",
                onPress:this.viewContact({name:rowData.name,id:rowID}),
                component: <Image style={{flex: 1}} source={require('./../assets/images/dp.png')} style={styles.btnIcon}/>

            }
        ]
        const swipeLeftButtons = [
            {
                text:'Later',
                backgroundColor:"#F6BD5E",
                underlayColor:"#F6BD5E",
                onPress:this.saveForLater({name:rowData.name,id:rowID}),
                component: <Image style={{flex: 1}} source={require('./../assets/images/later.png')} style={styles.btnIcon}/>

            },
            {
                text:'Archive',
                backgroundColor:"#6C9FB8",
                underlayColor:"#6C9FB8",
                onPress:this.archiveConvo({name:rowData.name,id:rowID}),
                component: <Image style={{flex: 1}} source={require('./../assets/images/download.png')} style={styles.btnIcon}/>

            }
        ]

        return (
            <Swipeout
                right={swipeRightButtons}
                left={swipeLeftButtons}
                rowID={rowID}
                sectionID={sectionID}
                autoClose='true'
                backgroundColor= 'transparent'>
                <View style={styles.rowContainer}>
                    <Image source={{uri:rowData.contact_dp}} style={styles.dp}/>
                    <View style={styles.gridContainer}>
                        <View style={styles.row}>
                            <Text style={styles.name}>{rowData.contact_name}</Text>
                            <Text style={styles.time}>{rowData.last_activity_time}</Text>
                        </View>
                        <Text style={styles.last_msg}>{rowData.last_msg}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }



    toggleNav = () => {
        this.setState({navigationOpen: !this.state.navigationOpen})
    }

    render(){
        return (
            <Drawer isOpen={this.state.navigationOpen} activeRouteId={0}>
                <View style={styles.body}>
                    <View style={styles.rowSpace}>
                        <TouchableHighlight
                            onPress={this.toggleNav}
                            underlayColor="#46BD96">
                            <Image source={require('./../assets/images/menu-alt-512.png')} style={styles.imageB}/>
                        </TouchableHighlight>


                        <Text style={styles.textAction}>+</Text>
                    </View>
                    <View>
                        <SearchBar  ref="searchBar"
                                    placeholder="Search"
                                    onChangeText={(text) => this.setState({searchText:text})}
                                    style={styles.textInput}/>
                    </View>
                    <ListView
                        dataSource={this.state.conversations}
                        renderRow={this.renderRow}>
                    </ListView>
                </View>
            </Drawer>
        )
    }
}