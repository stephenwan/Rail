import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStations, doneStationSelection } from '../actions/actionCreators';
import StationList from '../components/StationList';

const mapStateToProps = state => ({
  stations: state.stations
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadStations, doneStationSelection }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(StationList);
