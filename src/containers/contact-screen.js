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
        marginTop: 14,
        fontSize: 15,
        fontWeight: "bold"
    },
    textAction: {
        textAlign: "center",
        marginTop: 1,
        fontSize: 32,
        fontWeight: "bold",
        color: "#1abc9c"
    },
    headSec:{
        margin:12,
    },
    tag:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#1abc9c"
    },
    rowContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
        padding:15,
        marginLeft:15,
        marginRight:15,
        flexDirection:"row"
    },
    first_name:{
        fontSize:16,
        marginRight:5
    },
    last_name:{
        fontSize:16,
        fontWeight:"bold"
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
    {name: "Jim Web"}
]


export default class ContactScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            navigationOpen: false,
            contacts: ds,
            groups:[]
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
            <Drawer isOpen={this.state.navigationOpen}>
                <View style={styles.body}>
                    <View style={styles.rowSpace}>
                        <TouchableHighlight
                            onPress={this.toggleNav}
                            underlayColor="#1abc9c">
                            <Image source={require('./../assets/images/menu-alt-512.png')} style={styles.imageB}/>
                        </TouchableHighlight>
                        <Text style={styles.textHeader}>Contacts</Text>
                        <Text style={styles.textAction}>+</Text>
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