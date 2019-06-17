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

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
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
          name="password"
          component={TextInput}
          label="Email"
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
