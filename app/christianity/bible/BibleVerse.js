import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, FlatList, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../../styles/Styling";
import axios from "axios";

const BIBLE_API = 'https://peaceful-waters-30592.herokuapp.com/api/bible/'

const BibleVerse = ({ route, navigation }) => {
    const verse = route.params;
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [love, setLove] = useState(false);

    useEffect(() => {
        fetch(BIBLE_API + verse.id)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLove(res.status)
            })
            .catch(error => console.error(error.message))
            .finally(() => setLoading(false));
    }, [setData])

    const onChangeStatus = (status) => {
        let { _id, title, message, version, testament } = data;

        const updatedBible = {
            verseTitle: title,
            verseMessage: message,
            verseVersion:version,
            verseTestament: testament,
            verseStatus: status
        }

        axios.put(BIBLE_API + _id, updatedBible)
            .then(res => {
                if(res) setLove(status)
            });
    }

    return (
        <SafeAreaView style={styles.verseContainer2}>
            {isLoading ?
                <View style={styles.container2}>
                    <ActivityIndicator size="large" color="#fbc531" />
                </View>
                :
                (
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.verseHeading}>{data.title}</Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeItem2}>#{data.version}</Text>
                            <Text style={styles.badgeItem2}>#{data.testament}</Text>
                        </View>
                        <Text style={styles.verseText}>{data.message}</Text>
                        <View style={styles.share}>
                            <Icon name="md-heart" style={love === true ? styles.shareIconTapped : styles.shareIconDefault} size={30} color={love === true ? "#FFFFFF" : "#34495e"} onPress={() => onChangeStatus(!love)} />
                            <Icon name="md-share-alt" style={styles.shareIconDefault} size={30} color="#34495e" />
                        </View>
                    </ScrollView>
                )
            }
        </SafeAreaView>
    );
}

export default BibleVerse;