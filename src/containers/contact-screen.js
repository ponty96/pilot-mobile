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
    Image,
    ListView,
    ScrollView
} from 'react-native';

import Drawer from '../components/drawer-screen';
import _ from 'lodash';

const { width, height } = Dimensions.get('window');
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
        color:"#777"
    },
    textAction: {
        textAlign: "center",
        marginTop: 1,
        fontSize: 32,
        fontWeight: "bold",
        color: "#46BD96"
    },
    headSec:{
        margin:12,
    },
    tag:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#46BD96"
    },
    rowContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
        padding:15,
        marginLeft:35,
        marginRight:35,
        flexDirection:"row"
    },
    first_name:{
        fontSize:16,
        marginRight:5,
        color:"#868788"
    },
    last_name:{
        fontSize:16,
        fontWeight:"bold",
        color:"#777"
    },
    textInput:{
        borderWidth:1,
        borderColor:"#e5e5e5",
        borderRadius:5,
        height:30,
        width:(width * 0.9),
        alignSelf:"center",
        padding:5,
        paddingLeft:10,
        marginBottom:15,
        color:"#666",
        textAlign:"center"
    }

});


const dummyContacts = [
    {name:"A", isGroup:true},
    {name: "Aregbede Ayomide"},
    {name: "Andrew Johnson"},
    {name:"B", isGroup:true},
    {name: "Blake Haskell"},
    {name: "Blaine Hatab"},
    {name:"D", isGroup:true},
    {name: "Dan Abranamov"},
    {name: "Dunderfelt Samuel"},
    {name:"S", isGroup:true},
    {name: "Scott J"},
    {name:"J", isGroup:true},
    {name: "Jim Web"},
    {name: "Jim Fanghou"},
    {name: "Jim Farewell"},
    {name: "Jim Brick"},
    {name: "Jim Fushemoceta"}
]


export default class ContactScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            navigationOpen: false,
            contacts: ds,
            groups:[],
            search_q:""
        }
    }

    componentWillMount() {
        this.setState({
            contacts: this.state.contacts.cloneWithRows(dummyContacts)
        })
    }
    renderName = (row) => {
        if(row.isGroup){
            return <Text style={styles.tag}>{row.name}</Text>
        } else {
            return row.name.split(" ").map((content,index) => {
                return <Text style={index != 0 ? styles.last_name : styles.first_name} key={index}>
                    {content}</Text>
            })
        }
    }
    renderRow = (rowData) => {
        return (

                <View style={rowData.isGroup ? styles.headSec : styles.rowContainer}>
                    {this.renderName(rowData)}
                </View>
        )
    }


    toggleNav = () => {
        this.setState({navigationOpen: !this.state.navigationOpen})
    }

    render() {
        return (
            <Drawer isOpen={this.state.navigationOpen} activeRouteId={4}>
                <View style={styles.body}>
                    <View style={styles.rowSpace}>
                        <TouchableHighlight
                            onPress={this.toggleNav}
                            underlayColor="#46BD96">
                            <Image source={require('./../assets/images/menu-alt-512.png')} style={styles.imageB}/>
                        </TouchableHighlight>
                        <Text style={styles.textHeader}>Contacts</Text>
                        <Text style={styles.textAction}>+</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Search"
                            text={this.state.search_q}
                            onChangeText={(text) => this.setState({search_q:text})}
                            style={styles.textInput}
                        />
                    </View>
                    <ListView
                        dataSource={this.state.contacts}
                        renderRow={this.renderRow}>
                    </ListView>
                </View>
            </Drawer>

        )
    }
}