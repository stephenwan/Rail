import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startStationSelection } from '../actions/actionCreators';
import SearchForm from '../components/SearchForm';

const mapStateToProps = state => ({
  arrival: state.stationSelection.arrival,
  departure: state.stationSelection.departure,
  selecting: state.stationSelection.selecting
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ startStationSelection }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
