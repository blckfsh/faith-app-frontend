import React, { useState, useEffect, createRef } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, View, Text } from 'react-native';
import DelayInput from 'react-native-debounce-input';
import filter from 'lodash.filter';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../../styles/Styling";
import { TouchableHighlight } from 'react-native-gesture-handler';
import axios from 'axios';

const MEMBERS_API = 'https://peaceful-waters-30592.herokuapp.com/api/group-member/';
const USERS_API = 'https://peaceful-waters-30592.herokuapp.com/api/user/';

const Item = ({ item, addMembers, addUser, onPress }) => (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onPress}>
        <View style={styles.group}>
            <View style={styles.groupFirst}>
                <View style={styles.groupLeftInfo}>
                    <Text style={styles.groupName}>{item.name}</Text>
                    <Text style={styles.groupDescription}>{item.email}</Text>
                </View>
                <View style={styles.groupRightInfo}>
                    <View style={styles.badge}>
                        {
                            addMembers.map(member => {
                                if (member.user_id === item._id) return <Icon name="md-checkmark" key={member.user_id} size={20} color="#FFC312" onPress={() => console.log('working')} />
                            })                      
                        }
                        { addUser === item._id ? <Icon name="md-checkmark" size={20} color="#FFC312" onPress={() => console.log('working')} /> : null }
                        {/* { console.log(members) } */}
                    </View>
                </View>
            </View>
        </View>
    </TouchableHighlight>
)

const InviteMembers = ({ route }) => {

    const details = route.params;
    const [focus, setFocus] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [addMembers, setAddMembers] = useState([]);
    const [addUser, setAddUser] = useState([]);
    const [user, setUser] = useState([]);

    const [search, setSearch] = useState(false);
    const [query, setQuery] = useState('');
    
    const inputRef = createRef();

    const allUsers = () => {
        fetch(USERS_API)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setFullData(res);
            })
            .catch(error => console.error(error.message))
            .finally(() => setLoading(false));
    }

    const allMembers = () => {
        fetch(MEMBERS_API + details.id)
            .then(res => res.json())
            .then(res => {
                setAddMembers(res);
                //console.log("bakit wala " + res);
            })
            .catch(error => console.error(error.message))
            .finally(() => setLoading(false));
    }

    const invite = (id) => {
        setAddUser(id)

        const selectedUser = {
            gmGroup_id: details.id,
            gmUser_id: id
        }

        axios.post(MEMBERS_API, selectedUser)
            .then(res => console.log(res.data))
            .catch(error => console.error(error.message))

        allMembers();
    }

    const getUser = () => {
        setLoading(true);
        allUsers();
        allMembers();
      }

    function renderHeader() {
        return (
            <View style={styles.jumbotron}>
                <View style={styles.search}>
                    {!search ?
                        <>
                            <View style={{ flex: 2 }}>
                                <Text style={styles.title}>Invite Users</Text>
                            </View>
                            <View style={styles.searchIcon}>
                                <Icon name="md-search" size={30} color="#34495e" onPress={onSearch} />
                            </View>
                        </>
                        :
                        (
                            <>
                                <View style={{ flex: 3 }}>
                                    <DelayInput
                                        value={query}
                                        keyboardDismissMode="none"
                                        minLength={3}
                                        inputRef={inputRef}
                                        onChangeText={(queryText => handleSearch(queryText))}
                                        delayTimeout={1000}
                                        placeholder="find user...."
                                        style={styles.searchTxt}
                                    />
                                </View>
                                <View style={styles.searchIcon}>
                                    <Icon style={styles.searchClose} name="md-close" size={30} color="#34495e" onPress={closeSearch} />
                                </View>
                            </>
                        )
                    }
                </View>
            </View>
        )
    }

    const handleSearch = text => {
        const formattedQuery = text;
        const filteredData = filter(fullData, user => {
            return contains(user, formattedQuery);
        });
        setFocus(true);
        setData(filteredData);
        setQuery(text);

        console.log(
            "===== Start Testing =====\n" + filteredData + "\n" + "===== End Testing ====="
        )
    };

    const contains = ({ name }, query) => {
        if (name.includes(query)) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        getUser();
    }, []);

    const onSearch = () => {
        setSearch(true);
    }

    const closeSearch = () => {
        setSearch(false);
        setQuery('');
        getUser();
    }

    const renderItem = ({ item }) => (
        <Item
            item={item}
            addMembers={addMembers}
            addUser={addUser}
            onPress={() => invite(item._id)}
        />
    );

    return (
        <SafeAreaView>
            {isLoading ?
                <View>
                    <ActivityIndicator size="large" color="#fbc531" />
                </View>
                :
                (
                    <FlatList
                        ListHeaderComponent={renderHeader}
                        keyboardDismissMode="on-drag"
                        data={data}
                        keyExtractor={(item) => item._id}
                        renderItem={renderItem}
                        extraData={selectedId}
                    />
                )
            }
        </SafeAreaView>
    )
}

export default InviteMembers;