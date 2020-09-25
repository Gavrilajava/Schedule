import React from 'react';
import './App.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './components/containers/LoginFormContainer'
import NavbarContainer from './components/containers/NavBarContainer'
import ScheduleContainer from './components/containers/ScheduleContainer'
import WorkcentersContainer from './components/containers/WorkcentersContainer'
import UploadsContainer from './components/containers/UploadsContainer'
import UsersContainer from './components/containers/UsersContainer'
import SettingsContainer from './components/containers/SettingsContainer'
import CalendarsContainer from './components/containers/CalendarsContainer'
import PerformanceContainer from './components/containers/PerformanceContainer'

const App = ({ user }) => {
  return (
    !user ? 
      <LoginFormContainer/>
    : 
      <BrowserRouter>
        <NavbarContainer/>
        <Switch>
          <Route exact path="/" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route path="/schedule/:code" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route exact path="/schedule" render={(routerProps) => <ScheduleContainer {...routerProps} /> }/>
          <Route exact path="/workcenters" render={(routerProps) => <WorkcentersContainer {...routerProps} /> }/>
          <Route exact path="/uploads" render={(routerProps) => <UploadsContainer {...routerProps} /> }/>
          <Route exact path="/users" render={(routerProps) => <UsersContainer {...routerProps} /> }/>
          <Route exact path="/settings" render={(routerProps) => <SettingsContainer {...routerProps} /> }/>
          <Route exact path="/calendars" render={(routerProps) => <CalendarsContainer {...routerProps} /> }/>
          <Route exact path="/performance" render={(routerProps) => <PerformanceContainer {...routerProps} /> }/>
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
