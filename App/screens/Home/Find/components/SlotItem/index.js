import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 150,
    borderRadius: 7,
    marginVertical: 7,
    marginHorizontal: 22,
    justifyContent: 'center',
  },
  text_label: {
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  section_label: {

  },
  section_duration: {

  },
  text_duration: {
    textAlign: 'center',
  },
});

export default class SlotItem extends Component {
  render() {
    const { index, total, isOccupied } = this.props;
    return (
      <TouchableOpacity
        style={{
          ...styles.container,
          marginTop: index <= 1 ? 40 : 7,
          marginBottom: index === total - 1 ? 40 : 7,
          backgroundColor: isOccupied ? '#FFC6C6' : '#F8F4FF',
        }}
      >
        <View style={styles.section_label}>
          <Text style={styles.text_label}>
            A
          </Text>
        </View>
        <View style={styles.section_duration}>
          <Text style={styles.text_duration}>
            30:20:23 left
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
