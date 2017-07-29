import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incCounter, incCounterDelayed } from '../actions/actionCreators';
import HelloView from '../components/HelloView';

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ incCounter, incCounterDelayed }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HelloView);
