import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../presentational/NavBar'
import { connect } from 'react-redux'

const NavBarContainer = ( { user, logOut } ) => {

  const location = useLocation();

  const menuItems = [
    {path: '/schedule', title: "Schedule"},
    {path: '/workcenters', title: "Workcenters"},
    {path: '/uploads', title: "Uploads"},
    {path: '/users', title: "Users"},
    {path: '/settings', title: "Settings"},
    {path: '/calendars', title: "Calendars"},
    {path: '/performance', title: "Performance"},
  ]


  return(
    <NavBar 
      menuItems = { menuItems }
      active = { location.pathname }
      user = { user }
      logOut = { logOut }
    />
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch({ type: 'logout' }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)


