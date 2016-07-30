import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class instafit extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text>
            InstaFit
          </Text>
        </View>

        <View style={styles.footer}>
          <View>
            <Text >
              Sign_up 
            </Text>
          </View>
          <View>
            <Text>
              Login 
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 2,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333333',
  },
});

AppRegistry.registerComponent('instafit', () => instafit);
