import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        //backgroundColor: '#dcdde1'
    },
    container2: {
        flex: 1,
        justifyContent: "center"
    },
    jumbotron: {
        height: 60,
        backgroundColor: '#f5f6fa',
        paddingTop: 15,
        paddingLeft: 20
    },
    body: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#34495e'
    },
    search: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    searchIcon: {
        flex: 1, 
        alignItems: 'flex-end', 
        paddingRight: 20
    },
    searchTxt: {
        height: 40, 
        width: 280, 
        borderColor: '#34495e', 
        borderBottomWidth: .5, 
        borderColor: '#34495e',
        marginRight: 25,
        textTransform: 'capitalize'
    },
    searchClose: {
        marginTop: 5
    },
    txt: {
        fontSize: 20,
    },
    verseContainer: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0
    },
    item: {
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 0
    },
    verseTitle: {
        fontSize: 17
    },
    verseMessage: {
        fontSize: 13
    },
    badge: {
        flex: 1,
        flexDirection: 'row'
    },
    loveIconVisible: {
        marginTop: 15,
    },
    loveIconInvisible: {
        display: 'none'
    },
    badgeItem: {
        alignSelf: 'center',
        marginTop: 15,
        marginRight: 5,
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFC312',
        color: '#34495e',
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    badgeItem2: {
        alignSelf: 'center',
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#FFC312',
        color: '#34495e',
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    badgeItemNone: {
        display: 'none'
    },
    badgeItemGreen: {
        backgroundColor: '#009432',
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 8,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    badgeItemYellow: {
        backgroundColor: '#FFC312',
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 8,
        fontWeight: 'bold',
        color: '#000',
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    badgeItemRed: {
        backgroundColor: '#EA2027',
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 8,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    verseContainer2: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    verseHeading: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    },
    verseText: {
        marginTop: 30,
        fontSize: 30
    },
    share: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 50
    },
    shareIconDefault: {
        fontSize: 40,
        backgroundColor: '#dcdde1',
        padding: 20,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 100,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    shareIconTapped: {
        fontSize: 40,
        backgroundColor: '#fbc531',
        padding: 20,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 100,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    group:
    {
        backgroundColor: '#ffffff',
        marginVertical: 1,
        padding: 20,
    },
    groupFirst: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    groupName: 
    {
        fontWeight: '500',
        fontSize: 15,
        color: '#000'
    },
    groupDescription: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#353b48'
    },
    groupRightInfo:
    {
        // backgroundColor: 'red'
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingRight: 11,
        // paddingLeft: 11,
        // borderRadius: 50,
        // backgroundColor: '#fbc531',
        // shadowColor: '#000',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
    groupMembers:
    {
        fontWeight: 'bold'
    },
    button: {
        marginLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#FFC312',
        color: '#34495e',
        borderRadius: 50,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    inviteButton: {
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 14,
        paddingLeft: 14,
        backgroundColor: '#fff',
        color: '#34495e',
        borderRadius: 50,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    invitedButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 13,
        paddingLeft: 13,
        backgroundColor: '#FFC312',
        color: '#fff',
        borderRadius: 50,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    invitedButton2: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 14,
        paddingLeft: 14,
        backgroundColor: '#FFC312',
        color: '#fff',
        borderRadius: 50,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    groupBody: {
        marginTop: 20,
        paddingTop: 5,
        borderColor: '#e6e6e6'
    },
    groupBodyText: {
        textTransform: 'uppercase',
        fontSize: 10
    },
    groupBodyDetailText: {
        fontSize: 14
    },
    groupDetailBody: {
        marginTop: 30,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#dcdde1'
    },
    modalCenteredView: {
        flex: 1,
        //justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginTop: 120
    },
    modalArrowUp: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        width: 0,
        height: 0,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#f1f2f6',
    },
    modalView: {        
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f1f2f6'
    },
    modalContent: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',     
    },
    modalOpenButton: {
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingRight: 20
    },
    modalText: {
        fontSize: 12,
        textTransform: 'uppercase'
    },

    // User Profile
    user: {
        flex: 1,
        flexDirection: 'column'
    },
    userHeader: {
        flexDirection: 'row',
        backgroundColor: '#f5f6fa',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    userHeaderLeft: {
        width: 'auto',
        padding: 10,
    },
    userHeaderLeftImageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    userHeaderImageBackground: {
        borderRadius: 5,
        padding: 10
    },
    userHeaderLeftImage: {
        width: 80,
        height: 80,
    },
    userHeaderRight: {
        width: 'auto',
        padding: 10
    },
    userHeaderRightName: {
        textTransform: 'uppercase',
        fontSize: 15
    },
    userHeaderRightEmail: {
        color: '#353b48',
        textTransform: 'uppercase',
        fontSize: 10
    },
    userOptions: {
        flexDirection: 'row',
        marginTop: 10
    },
    userOptionItem: {
        flex: 1,
        alignItems: 'center'
    },
    userOptionItemCount: {
        color: '#FFC312',
        fontWeight: '800',
        fontSize: 20
    },
    userOptionItemDescription: {
        color: '#353b48',
        textTransform: 'uppercase',
        fontSize: 8
    },
    action: {
        //flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        marginBottom: 20
    },
    actionItem: {
        flex: 1,
        width: 33,
        alignItems: 'center',
        textAlign: 'center'
    },
    actionItemText: {
        color: '#353b48',
        textTransform: 'uppercase',
        fontSize: 9,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center'
    },
    favourite: {
        flexDirection: 'column',
        backgroundColor: '#f5f6fa',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6'
    },
    favouriteHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    favouriteHeaderIcon: {
        marginRight: 10
    },
    favouriteHeaderText: {
        fontSize: 13,
        textTransform: 'uppercase'
    },
    favouriteBody: {
        
    },
    favouriteBodyList: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    favouriteBodyListTitle: {
        fontSize: 15
    },
    favouriteBodyListContent: {
        marginTop: 5,
        fontSize: 12
    }
});

export default styles;