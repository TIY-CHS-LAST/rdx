import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as catActions from './store/actions'
import List from './List'

const App = ({ cats, actions, ...rest }) => {
  return <List cats={cats} actions={actions} {...rest} />
}

const mapStateToProps = state => {
  return { cats: state.catReducer.cats }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(catActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
