import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles/Styling";


function HomeScreen({ navigation }) {
    return (
      <View style={styles.view}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }

  export default HomeScreen