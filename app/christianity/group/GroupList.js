import { useState, useEffect, createRef } from 'react';
import * as React from 'react';
import Moment from 'moment';
import 'moment-timezone';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import DelayInput from 'react-native-debounce-input';
import filter from 'lodash.filter';
import styles from "../../styles/Styling";
import Icon from 'react-native-vector-icons/Ionicons';

const GROUP_API = 'https://peaceful-waters-30592.herokuapp.com/api/group/'
const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.group}>
      <View style={styles.groupFirst}>
        <View style={styles.groupLeftInfo}>
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.groupDescription}>{item.description}</Text>
        </View>
        <View style={styles.groupRightInfo}>
          <View style={styles.badge}>
            <Text style={styles.badgeItem}>admin</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupBody}>
        <Text style={styles.groupBodyText}>created {Moment(item.dateCreated).startOf('day').fromNow()} | {item.membersCount} members</Text>
        {/* <View style={styles.badge}>
            <Text style={ item.groupRequestJoinStatus === "IN REVIEW" ? styles.badgeItemYellow :  item.groupRequestJoinStatus === "REQUEST DENIED" ? styles.badgeItemRed :  item.groupRequestJoinStatus === "REQUEST APPROVED" ? styles.badgeItemGreen : styles.badgeItemNone }>{item.groupRequestJoinStatus}</Text>
        </View> */}
      </View>
    </View>
  </TouchableOpacity>
);

const GroupList = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = createRef();

  const getGroup = () => {
    setLoading(true);
    fetch(GROUP_API)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setFullData(res);

        setLoading(false);
      })
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }

  function renderHeader() {
    return (
      <View style={styles.jumbotron}>
        <View style={styles.search}>
          {!search ?
            <>
              <View style={{ flex: 2 }}>
                <Text style={styles.title}>Bible Groups</Text>
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
                    //autoFocus={focus}
                    keyboardDismissMode="none"
                    minLength={3}
                    inputRef={inputRef}
                    onChangeText={(queryText => handleSearch(queryText))}
                    delayTimeout={1000}
                    placeholder="find group...."
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
    const filteredData = filter(fullData, group => {
      return contains(group, formattedQuery);
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
    getGroup();
  }, []);

  const onSearch = () => {
    setSearch(true);
  }

  const closeSearch = () => {
    setSearch(false);
    setQuery('');
    getGroup();
  }

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigation.navigate('Group Details', {id: item._id})}
    />
  );


  return (
    <SafeAreaView style={styles.verseContainer}>
      {isLoading ?
        <View style={styles.container2}>
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
        )}
    </SafeAreaView>
  );
}

export default GroupList;