import * as React from 'react';
import { Text, View } from 'react-native';
import styles from "../../styles/Styling";

import GroupList from "./GroupList";


function GroupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <GroupList />
        </View>
    );
}

export default GroupScreen;