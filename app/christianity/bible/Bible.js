import { useState, useEffect } from 'react';
import * as React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from "../../styles/Styling";
import BibleChapters from "./BibleChapters";
//import { TextInput } from 'react-native-gesture-handler';


function BibleScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <BibleChapters />
        </View>
    );
}

export default BibleScreen;