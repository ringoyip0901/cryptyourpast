import { connect } from 'react-redux';
import * as components from '../components/Transaction'
import { submit } from '../actions/actions.js'

export const MainContainer = connect(
  function mapStateToProps(state) {
    return {
      state: state
    }
  }, 
  function mapDispatchToProps(dispatch) {
    return {
      submit: transaction => dispatch(submit(transaction)),
    }
  }
)(components.Transaction)