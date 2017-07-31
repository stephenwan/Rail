import React from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import StationListContainer from '../containers/StationListContainer';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.selecting !== null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalVisible: nextProps.selecting !== null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.");}}
          >
          <StationListContainer/>
        </Modal>
        <View style={styles.searchSection}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => { this.props.startStationSelection('departure'); }}>
            <Text>{ !this.props.departure ? (<Text style={styles.placeholder}>Pick Departure</Text>)
              : this.props.departure.location_name }</Text>
          </TouchableOpacity>
          <View style={styles.inputDescription}>
            <Text>From: </Text>
          </View>
        </View>
         <View style={styles.searchSection}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => { this.props.startStationSelection('arrival'); }}>
            <Text>{ !this.props.arrival ? (<Text style={styles.placeholder}>Pick Arrival</Text>)
                    : this.props.arrival.location_name }</Text>
          </TouchableOpacity>
          <View style={styles.inputDescription}>
            <Text>To: </Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b2d6'
  },
  searchSection: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:36,
    margin: 20
  },
  inputDescription: {
    left: 10,
    top: 0,
    position: 'absolute',
    width: 40,
    height: 36,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 4,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 55,
    backgroundColor: '#fff'
  },
  placeholder: {
    color: '#cccccc',
    fontWeight: 'normal'
  }
});
