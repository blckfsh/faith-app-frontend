import React, { useState, useEffect } from 'react';
import {  LogBox } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import Moment from 'moment';
import 'moment-timezone';
import { Text, SafeAreaView, ScrollView, FlatList, View, ActivityIndicator, Modal, Alert, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../../styles/Styling";
import { TouchableOpacity } from 'react-native-gesture-handler';

const GROUP_API = 'https://peaceful-waters-30592.herokuapp.com/api/group/';
const MEMBERS_API = 'https://peaceful-waters-30592.herokuapp.com/api/group-member/';

const Item = ({ item, onPress }) => (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onPress}>
        <View style={styles.group}>
            <Text>{item.members.map(user => user.name)}</Text>
        </View>
    </TouchableHighlight>
  );

const GroupDetails = ({ route,  navigation }) => {
    const details = route.params;
    const [data, setData] = useState([]);
    const [members, setMembers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch(GROUP_API + details.id)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(error => console.error(error.message))
            .finally(() => setLoading(false));

        fetch(MEMBERS_API + details.id)
            .then(res2 => res2.json())
            .then(res2 => {
                setMembers(res2)
            })
            .catch(error => console.error(error.message))
            .finally(() => setLoading(false));

        // To disable the warning on VirtualizedLists
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [setData])

    const renderItem = ({ item }) => (
        <Item
            item={item}
            onPress={() => navigation.navigate('Settings', {
                screen: 'Profile',
                params: { userId: item.user_id }
            })}
        />
    );

    const inviteMembers = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('Invite Members', {id: details.id});
    }

    return (
        <SafeAreaView>
            {isLoading ?
                <View>
                    <ActivityIndicator size="large" color="#fbc531" />
                </View>
                :
                (
                    <ScrollView>
                        <View style={styles.group}>
                            <View style={styles.groupFirst}>
                                <View style={styles.groupLeftInfo}>
                                    <Text style={styles.groupName}>{data.name}</Text>
                                    <Text style={styles.groupDescription}>{data.description}</Text>
                                </View>
                                <View style={styles.groupRightInfo}>
                                    <View style={styles.badge}>
                                        <Icon style={styles.button} name="md-more" size={20} color="#34495e" onPress={() => setModalVisible(true)} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.groupDetailBody}>
                                <Text style={styles.groupBodyDetailText}><Icon name="md-calendar" size={20} color="#34495e" /> Group created on {Moment(data.dateCreated).format("MMM Do YYYY")}</Text>
                                <Text><Icon name="md-person" size={20} color="#34495e" /> Members joined: {data.membersCount}</Text>
                            </View>
                        </View>
                        <SafeAreaView>
                            <FlatList
                                data={members}
                                renderItem={renderItem}
                                keyExtractor={item => item._id}
                            />
                        </SafeAreaView>
                        <View style={styles.modalCenteredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                }}
                            >
                                <View style={styles.modalCenteredView}>
                                    <View style={styles.modalArrowUp}></View>
                                    <View style={styles.modalView}>
                                        <TouchableHighlight
                                            style={styles.modalOpenButton}
                                            onPress={() => {
                                                setModalVisible(!modalVisible)
                                            }}
                                            underlayColor="#f1f2f6"
                                        >
                                            <Icon name="md-close" size={20} color="#34495e" />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            onPress={inviteMembers}
                                            underlayColor="#e2e2e2"
                                        >
                                            <View style={styles.modalContent}>
                                                <Text style={styles.modalText}><Icon name="md-add" size={20} color="#34495e" />&nbsp;&nbsp;&nbsp;Invite Members</Text>
                                            </View>
                                        </TouchableHighlight>
                                        <View style={styles.modalContent}><Text style={styles.modalText}><Icon name="md-search" size={20} color="#34495e" />&nbsp;&nbsp;&nbsp;Search Member</Text></View>
                                        <View style={styles.modalContent}><Text style={styles.modalText}><Icon name="md-remove-circle" size={20} color="#34495e" />&nbsp;&nbsp;&nbsp;Remove a Member</Text></View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </ScrollView>
                )
            }
        </SafeAreaView>
    );
}

export default GroupDetails;