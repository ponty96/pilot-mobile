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

import Drawer from '../components/drawer-screen';
import SearchBar from 'react-native-search-bar'
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
        borderColor:"#eeeeee",
        backgroundColor:"#eeeeee",
        height:30,
        width:(width * 0.6),
        alignSelf:"center",
        marginBottom:15,
        color:"#666",
        textAlign:"center",
        marginTop: 7.5
    }

});

export default class ConversationsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false,
            searchText:""
        }
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
                        <SearchBar  ref="searchBar"
                                    placeholder="Search"
                                    onChangeText={(text) => this.setState({searchText:text})}
                                    style={styles.textInput}/>
                        <Text style={styles.textAction}>+</Text>
                    </View>
                </View>
            </Drawer>
        )
    }
}