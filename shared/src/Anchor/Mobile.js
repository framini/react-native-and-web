import * as React from "react";
import { Text, Linking, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "palevioletred"
  }
});

class Anchor extends React.Component {
  handleClick = () => {
    Linking.openURL(this.props.to);
  };

  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <Text title={label} onPress={this.handleClick}>
          Hi
        </Text>
      </View>
    );
  }
}

export default Anchor;
