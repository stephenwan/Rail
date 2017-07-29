import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStations } from '../actions/actionCreators';
import StationList from '../components/StationList';

const mapStateToProps = state => ({
  stations: state.stations
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadStations }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(StationList);
