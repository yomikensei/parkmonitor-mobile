import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
  },
});

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Landing page
        </Text>
      </View>
    );
  }
}

export default Landing;
