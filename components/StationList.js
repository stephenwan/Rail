import React from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, ListView } from 'react-native';


export default class StationList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      token: '',
      dataSource: ds.cloneWithRows(props.stations),
      isLoading: false
    };
  }

  _changeToken = (token) => {
    if (token.length == 0) {
      this.setState({token: token, dataSource: this.state.dataSource.cloneWithRows([])});
    } else {
      this.setState({token: token, isLoading: true});
      this.props.loadStations(token);
    }
  };

  _renderRow(rowData) {
    return (
      <View style={styles.contentContainer}>
        <Text>{rowData.location_name}</Text>
      </View>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.stations),
      isLoading: false
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.centering}>Rail Demo</Text>
        </View>
        <TextInput
          style={[styles.contentContainer, styles.textInput]}
          onChangeText={this._changeToken}
          value={this.state.token}
          placeholder="Search stations.."
          />
        { this.state.isLoading ?
          (
            <ActivityIndicator
              style={[styles.centering, styles.gray]}
              color="white"
              />
          ) : (
            <ListView
              style={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  },
  container: {
    justifyContent: 'space-around'
  },
  contentContainer: {
    padding: 12
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  listContainer: {
    maxHeight: 400,
    backgroundColor: 'white'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  gray: {
    backgroundColor: '#cccccc'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  }
});
