import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionsCreator from './actions';

const mapDispatchToProps = dispatch => bindActionCreators( actionsCreator, dispatch );

export const connectComponent = mapStateToProps => connect( mapStateToProps, mapDispatchToProps );