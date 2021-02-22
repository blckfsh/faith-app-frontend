import { useState, useEffect } from 'react';
import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, Image, FlatList, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../../styles/Styling";

const USER_API = 'https://peaceful-waters-30592.herokuapp.com/api/user/';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Matthew 1:1",
    content: "This is the genealogy of Jesus the Messiah the son of David, the son of Abraham:"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Matthew 1:2",
    content: "Abraham was the father of Isaac,Isaac the father of Jacob,Jacob the father of Judah and his brothers,"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Matthew 1:3",
    content: "Judah the father of Perez and Zerah, whose mother was Tamar,Perez the father of Hezron,Hezron the father of Ram,"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Matthew 1:4",
    content: "Judah the father of Perez and Zerah, whose mother was Tamar,Perez the father of Hezron,Hezron the father of Ram,"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Matthew 1:4",
    content: "Judah the father of Perez and Zerah, whose mother was Tamar,Perez the father of Hezron,Hezron the father of Ram,"
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.favouriteBodyList}>
      <Text style={styles.favouriteBodyListTitle}>{item.title}</Text>
      <Text style={styles.favouriteBodyListContent}>{item.content}</Text>
    </View>
  </TouchableOpacity>
);

const Profile = ({ route, navigation }) => {
  const profile = route.params;

  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [user, setUser] = useState([]);
  const [empty, setEmpty] = useState(null);

  const getUser = (id) => {
    fetch(USER_API + id)
      .then(res => res.json())
      .then(res => {
        setUser(res)
      })
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }

  useFocusEffect(
    React.useCallback(() => {
      getUser(profile.userId);

      return () => {
        // Cleanup duties here
      }
    }, [setUser, profile.userId])
  )


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#fff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView>
      {
        isLoading ?
          <View>
            <ActivityIndicator size="large" color="#fbc531" />
          </View>
          :
          <ScrollView>
            <View style={styles.user}>
              <View style={styles.userHeader}>
                <View style={styles.userHeaderLeft}>
                  <View style={styles.userHeaderLeftImageContainer}>
                    <LinearGradient colors={['#FFC312', '#FFC312']} style={styles.userHeaderImageBackground}>
                      <Image style={styles.userHeaderLeftImage} source={require('../../../assets/jesus.png')} />
                    </LinearGradient>
                  </View>
                </View>
                <View style={styles.userHeaderRight}>
                  <Text style={styles.userHeaderRightName}>{user.name}</Text>
                  <Text style={styles.userHeaderRightEmail}>{user.email}</Text>
                  <View style={styles.userOptions}>
                    <View style={styles.userOptionItem}>
                      <Text style={styles.userOptionItemCount}>4</Text>
                      <Text style={styles.userOptionItemDescription}>groups</Text>
                    </View>
                    <View style={styles.userOptionItem}>
                      <Text style={styles.userOptionItemCount}>100</Text>
                      <Text style={styles.userOptionItemDescription}>shared</Text>
                    </View>
                    <View style={styles.userOptionItem}>
                      <Text style={styles.userOptionItemCount}>24</Text>
                      <Text style={styles.userOptionItemDescription}>favorite</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.action}>
                <View style={styles.actionItem}>
                  <Icon style={styles.invitedButton} name="md-contacts" size={30} color="#34495e" />
                  <Text style={styles.actionItemText}>invite to group</Text>
                </View>
                <View style={styles.actionItem}>
                  <Icon style={styles.invitedButton2} name="md-share-alt" size={30} color="#34495e" />
                  <Text style={styles.actionItemText}>share a verse</Text>
                </View>
                <View style={styles.actionItem}>
                  <Icon style={styles.invitedButton} name="md-heart" size={30} color="#34495e" />
                  <Text style={styles.actionItemText}>follow the user</Text>
                </View>
              </View>
              <View style={styles.favourite}>
                <View style={styles.favouriteHeader}>
                  <Icon style={styles.favouriteHeaderIcon} name="md-heart" size={25} color="#34495e" />
                  <Text style={styles.favouriteHeaderText}>Favourite Bible Verses</Text>
                </View>
                <SafeAreaView style={styles.favouriteBody}>
                  <ScrollView>
                    <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                      extraData={selectedId}
                    />
                  </ScrollView>
                </SafeAreaView>
              </View>
            </View>
          </ScrollView>

      }
    </SafeAreaView>
  );
}

  export default Profile;