import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles/Styling";

function DetailsScreen({ navigation }) {
    return (
      <View style={styles.view}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }

  export default DetailsScreen;