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
    ListView,
    Dimensions,
    PropTypes
} from 'react-native';



const { width, height } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#172635",
        paddingTop:(height * 0.042)
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
        backgroundColor:"#6C9FB8"
    },
    row:{
        flexDirection:"row"
    },
    image:{
        height:25,
        width:25,
        margin:5

    },
    imageB:{
        height:32,
        width:32,
        margin:5,
        alignSelf:"flex-end"
    },
    text:{
        color:"#fff",
        fontSize:15,
        margin:10,
        fontFamily:"ProximaNovaA-Regular"
    },
    closeBtn:{
        width:20,
        height:20,
        alignSelf:"center",
        justifyContent:"center",
        marginBottom:30,
        padding:3
    },
    closeBtnText:{
        fontSize:25,
        textAlign:"center",
        color:"#fbfbfb"
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
            dataSource:this.state.dataSource.cloneWithRows(this.props.routes)
        })
    }

    route = (ID) => {
        const section = this.props.routes[ID]
        const fn = Actions[section.key]
        fn()
    }
    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        const rowStyle = rowID == this.props.activeRouteId ? styles.rowSpaceActive : styles.rowSpace;
        return (
            <TouchableHighlight
                underlayColor="#6C9FB8"
                onPress={() => this.route(rowID)}>
            <View style={rowStyle}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={styles.image}/>
                    <Text style={styles.text}>{rowData.name}</Text>
                </View>
                <Text style={styles.text}>{rowData.count !== null ? rowData.count : ""}</Text>
            </View>
          </TouchableHighlight>
        )
    }
    render(){
        return (
            <View style={styles.body}>
                <View>
                    <Image source={require('./../assets/images/menu-alt-512.png')} style={styles.imageB}/>
                    </View>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow}>
                </ListView>
                <TouchableHighlight
                    onPress={() => this.props.close()}
                    underlayColor="rgba(255,255, 255, 0.15)"
                    style={styles.closeBtn}>
                    <Text style={styles.closeBtnText}>
                        X
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }
}

SideDrawer.propTypes = {
    open:PropTypes.func.isRequired
}