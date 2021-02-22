import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles/Styling";

function SettingsScreen({ navigation }) {
    return (
      <View style={styles.view}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  export default SettingsScreen;