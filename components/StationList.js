import React from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, ListView, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';


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

  _selectStation = (station) => {
    console.log('Selected station', station);
    this.props.doneStationSelection(station);
  };

  _renderRow(rowData) {
    const selectStation = () => {this._selectStation(rowData); console.log('111');};

    return (
      <TouchableOpacity style={styles.resultRow} onPress={ selectStation }>
        <Text>{rowData.location_name}</Text>
      </TouchableOpacity>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.stations),
      isLoading: false
    });
  }

  render() {
    const Row = ({station, onStationSelected}) => (
      <TouchableOpacity style={styles.resultRow} onPress={() => {onStationSelected(station);}}>
        <Text>{station.location_name}</Text>
      </TouchableOpacity>
    );

    return (
      <View>
        <View style={styles.header}>
          <View style={styles.searchRow}>
            <TextInput
              style={[styles.searchInput]}
              onChangeText={this._changeToken}
              value={this.state.token}
              placeholder="Search stations.."
              placeholderTextColor="white"
              />
            <Button
              containerStyle={styles.button}
              style={styles.button_font}
              onPress={ () => {this.props.doneStationSelection(null); }}>
              Cancel
            </Button>
          </View>
        </View>
        <View style={styles.panel}>
          { this.state.isLoading ? (
            <ActivityIndicator
              style={styles.spinner}
              color="white"
              />
          ) : (
            <ListView
              keyboardShouldPersistTaps="always"
              keyboardDismissMode="on-drag"
              dataSource={this.state.dataSource}
              renderRow={(station) => (<Row station={station} onStationSelected={this._selectStation}/>)}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.row_separator} />}
              />
          )}
        </View>
      </View>
    );
  }
}

const _horizontal = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const _row = {
  ..._horizontal,
  height: 36,
  paddingHorizontal: 10,
  paddingVertical: 3
};

const _font = {
  fontSize: 15
};

const _rowContent = {
  height: 30
};

const _roundBorder = {
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 4
};

const _centering = {
   alignItems: 'center',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  header: {
    height: 66,
    backgroundColor: '#00b2d6'
  },
  panel: {
    flexGrow: 1
  },
  searchRow: {
    ..._row,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  searchInput: {
    ..._roundBorder,
    ..._rowContent,
    ..._font,
    flex: 2,
    color: 'white',
    paddingHorizontal: 8,
    marginRight: 10
  },
  button: {
    ..._rowContent,
    ..._centering,
    flex: 0.5
  },
  button_font: {
    ..._font,
    color: 'white'
  },
  resultRow: {
    ..._row,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'flex-start'
  },
  row_separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  },
  spinner: {
    ..._centering,
    backgroundColor: '#cccccc'
  },
  horizontal: _horizontal
});
