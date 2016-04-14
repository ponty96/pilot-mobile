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
    {image:'', name:"Conversation", count:23},
    {image:'', name:"Trash", count:23},
    {image:'', name:"Later", count:23},
    {image:'', name:"Archive", count:0},
    {image:'', name:"Contacts", count:23},
    {image:'', name:"Settings", count:null},
    {image:'', name:"Nicolas Prieto", count:null}
]

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#34495e"
    },
    row:{
        flexDirection:"row"
    }
});

export default class SideDrawer extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})
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
        return (
            <View style={styles.row}>
                <Text>{rowData.name}</Text>
                <Text>{rowData.count !== null ? rowData.count : ""}</Text>
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