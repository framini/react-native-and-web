import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'papayawhip',
  },
});

class Anchor extends React.Component {
  render() {
    const { label, to } = this.props;
    return (
      <View style={styles.container}>
        <a href={to}>{label}</a>
      </View>
    );
  }
}

export default Anchor;
