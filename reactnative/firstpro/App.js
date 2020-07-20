/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


class App extends component
{

const styles = StyleSheet.create({


  body: {
    backgroundColor: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },

});

Render()
{

return(
<View style={styles.sectionDescription}>
<Text style={styles.body}>Hello world !!</Text>
</View>
);
}

}

export default App;


