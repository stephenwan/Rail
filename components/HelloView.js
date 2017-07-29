import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';


export default class HelloView extends React.Component {
  constructor(props) {
    super(props);
  }

  incCounter = () => {
    this.props.incCounter();
    console.log('inc counter called.');
  };

  incCounterDelayed = () => {
    this.props.incCounterDelayed();
    console.log('inc counter delayed called.');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin: 10}}>Rail Demo</Text>
        <TouchableOpacity onPress={this.incCounter}>
          <Text>Count is {this.props.count}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.incCounterDelayed}>
          <Text>Count is {this.props.count}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
