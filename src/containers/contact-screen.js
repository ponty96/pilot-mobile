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
    Image
} from 'react-native';

import Drawer from '../components/drawer-screen';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:(height * 0.042)
    },
    rowSpace:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5
    },
    imageB:{
        height:32,
        width:32,
        margin:5,
        alignSelf:"flex-start"
    },
    textHeader:{
        textAlign:"center",
        marginTop:14,
        fontSize:15,
        fontWeight:"bold"
    },
    textAction:{
        textAlign:"center",
        marginTop:1,
        fontSize:32,
        fontWeight:"bold",
        color:"#1abc9c"
    }

});
export default class ContactScreen extends Component {
    constructor(){
        super();
        this.state = {
            navigationOpen:false
        }
    }

    toggleNav = () => {
        this.setState({navigationOpen:!this.state.navigationOpen})
    }
    render(){
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
                </View>
            </Drawer>

        )
    }
}