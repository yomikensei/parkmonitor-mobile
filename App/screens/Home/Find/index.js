import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SlotItem from './components/SlotItem';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  list: {
  },
});

class Find extends Component {
  render() {
    const slots = [{ isOccupied: true }, {}, {}, {}, { isOccupied: true }, { isOccupied: true }, {}, { isOccupied: true }, {}, {}, {}, {}, { isOccupied: true }, {}, {}, {}, {}, { isOccupied: true }, {}, {}, {}, { isOccupied: true }, {}, {}, {}, { isOccupied: true }, {}, {}, { isOccupied: true }, {}, {}, { isOccupied: true }, {}, {}];
    return (
      <View style={styles.container}>
        <FlatList
          data={slots}
          renderItem={({ item: { isOccupied }, index }) => (
            <SlotItem isOccupied={isOccupied} index={index} total={slots.length} />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={styles.list}
        />
      </View>
    );
  }
}

export default Find;
