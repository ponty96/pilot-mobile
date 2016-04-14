/**
 * Created by ponty on 14/04/2016.
 */
import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';

const sideBarActionsList = [
    {image:require('./../assets/images/conversation.png'), name:"Conversations", count:23, active:true},
    {image:require('./../assets/images/trash.png'), name:"Trash", count:14, active:false},
    {image:require('./../assets/images/later.png'), name:"Later", count:2, active:false},
    {image:require('./../assets/images/archive.png'), name:"Archive", count:0, active:false},
    {image:require('./../assets/images/contacts.png'), name:"Contacts", count:23, active:false},
    {image:require('./../assets/images/settings.png'), name:"Settings", count:null, active:false},
    {image:require('./../assets/images/jbhatab.png'), name:"Blaine Hatab", count:null, active:false}
]

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#34495e"
    },
    rowSpace:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    rowSpaceActive:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"rgba(255,255, 255, 0.15)"
    },
    row:{
        flexDirection:"row"
    },
    image:{
        height:25,
        width:25,
        margin:5
    },
    text:{
        color:"#fff",
        fontSize:15,
        margin:10
    }
});

export default class SideDrawer extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds
        }
    }

    componentWillMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(sideBarActionsList)
        })
    }
    renderRow = (rowData) => {
        const rowStyle = rowData.active ? styles.rowSpaceActive : styles.rowSpace
        console.log(rowStyle)
        return (
            <View style={rowStyle}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={styles.image}/>
                    <Text style={styles.text}>{rowData.name}</Text>
                </View>
                <Text style={styles.text}>{rowData.count !== null ? rowData.count : ""}</Text>
            </View>
        )
    }
    render(){
        return (
            <View style={styles.body}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow}>
                </ListView>
            </View>
        )
    }
}