import { useState, useEffect, createRef } from "react";
import * as React from "react";
import { FlatList, SafeAreaView, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import DelayInput from 'react-native-debounce-input';
import styles from "../../styles/Styling";
import { useNavigation, CommonActions } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import filter from 'lodash.filter';

import verse from "../../test-json/verseData";

const BIBLE_API = 'https://peaceful-waters-30592.herokuapp.com/api/bible/'

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.verseTitle}>{item.title}</Text>
        <Text style={styles.verseMessage}>{item.message}</Text>
        <View style={styles.badge}>
            <Text style={styles.badgeItem}>#{item.version}</Text>
            <Text style={styles.badgeItem}>#{item.testament}</Text>
            <Icon name="md-heart" style={ item.status === true ? styles.loveIconVisible : styles.loveIconInvisible } size={25} color="#FFC312" />
        </View>
    </TouchableOpacity>
);

const BibleChapters = () => {
    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(false);
    const [focus, setFocus] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);

    const [search, setSearch] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = createRef();
    
    const getBible = () => {
        setLoading(true);
        fetch(BIBLE_API)
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
                                <Text style={styles.title}>Chapters & Verses</Text>
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
                                        placeholder="Ex: Matthew 1:1"
                                        style={styles.searchTxt}
                                    />
                                    {/* <TextInput
                                        style={styles.searchTxt}
                                        autoCorrect={false}
                                        clearButtonMode="always"
                                        autoFocus={focus}
                                        keyboardDismissMode="none"
                                        onChangeText={(queryText => handleSearch(queryText))}
                                        value={query}
                                        placeholder="Ex: Matthew 1:1"
                                    /> */}
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
        const filteredData = filter(fullData, bible => {
            return contains(bible, formattedQuery);
        });
        setFocus(true);
        setData(filteredData);
        setQuery(text);

        console.log(
            "===== Start Testing =====\n" + filteredData + "\n" + "===== End Testing ====="
            )
    };

    const contains = ({ title }, query) => {
        if (title.includes(query)) {
            return true;
        }
            return false;
    };

    useEffect(() => {
        getBible();
    }, []);

    const onSearch = () => {
        setSearch(true);
    }

    const closeSearch = () => {
        setSearch(false);
        setQuery('');
        getBible();
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#ffffff" : "#ffffff";

        return (
            <Item
                item={item}
                //onPress={() => setSelectedId(item.id)}
                //onPress={() => console.log(item._id)}
                onPress={() => navigation.navigate('Verse', {id: item._id})}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        // css for SafeAreaView: style={styles.verseContainer}
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
};

export default BibleChapters;