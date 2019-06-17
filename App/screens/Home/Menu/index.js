import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#8447ff',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginVertical: 10,
    elevation: 4,
  },
  text_button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
});

class Menu extends PureComponent {
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigate('Find'); }}
        >
          <Text style={styles.text_button}>
            Find a space
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigate('Meter'); }}
        >
          <Text style={styles.text_button}>
            My parking meter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigate('Settings'); }}
        >
          <Text style={styles.text_button}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigate('About'); }}
        >
          <Text style={styles.text_button}>
            About us
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Menu;
