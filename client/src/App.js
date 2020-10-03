import React from 'react';
import './App.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './components/containers/LoginFormContainer'
import NavbarContainer from './components/containers/NavBarContainer'
import ScheduleContainer from './components/containers/ScheduleContainer'
import ItemsContainer from './components/containers/ItemsContainer'
import UploadsContainer from './components/containers/UploadsContainer'
import SettingsContainer from './components/containers/SettingsContainer'
import CalendarsContainer from './components/containers/CalendarsContainer'
import CalloutContainer from './components/containers/CalloutContainer'

const App = ({ user }) => {
  return (
    !user ? 
      <LoginFormContainer/>
    : 
      <BrowserRouter>
        <NavbarContainer/>
        <CalloutContainer/>
        <Switch>
          <Route exact path="/" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route path="/schedule/:code" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route exact path="/schedule" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route exact path="/workcenters" render={(routerProps) => <ItemsContainer {...routerProps} model = "workcenter" /> }/>
          <Route exact path="/uploads" render={(routerProps) => <UploadsContainer {...routerProps} /> }/>
          <Route exact path="/users" render={(routerProps) => <ItemsContainer {...routerProps} model = "user" /> }/>
          <Route exact path="/settings" render={(routerProps) => <SettingsContainer {...routerProps} /> }/>
          <Route exact path="/calendars" render={(routerProps) => <CalendarsContainer {...routerProps} /> }/>
          <Route exact path="/performance" render={(routerProps) => <ItemsContainer {...routerProps} model = "workcenter" /> }/>
        </Switch>
      </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

App.propTypes = {
  user: PropTypes.string
}

export default connect(mapStateToProps)(App)
