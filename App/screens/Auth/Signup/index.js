import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignupForm from './components/SignupForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  section_form: {
    top: 100,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#8447ff',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 20,
  },
  text_button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
});
class Signup extends Component {
  render() {
    // const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Signup Page
        </Text>
        <View style={styles.section_form}>
          <SignupForm />
          <TouchableOpacity
            style={styles.button}
          // onPress={() => navigate('Signup')}
          >
            <Text style={styles.text_button}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
