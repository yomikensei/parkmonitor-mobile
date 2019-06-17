import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  View,
  StyleSheet,
} from 'react-native';

import TextInput from '../../../../../components/TextInput';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '80%',
  },
});

class SignupForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Field
          name="name"
          component={TextInput}
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="email"
          component={TextInput}
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="prepass"
          component={TextInput}
          label="Password"
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
          autoFocus
        />
        <Field
          name="confirmation"
          component={TextInput}
          label="Confirm Password"
          placeholder="Confirm Password"
          secureTextEntry
          returnKeyType="next"
          autoFocus
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'signupForm',
})(SignupForm);
