import React from 'react'
import PropTypes from 'prop-types'
import TopBar from 'harmonium/lib/TopBar'
import Menu from 'harmonium/lib/Menu'
import Button from 'harmonium/lib/Button'

const NavBar = ({ menuItems, active, user, logOut }) => {

  return(
    <TopBar>
      <TopBar.Item>
        <Menu horizontalLeft>
          {menuItems.map(item => <Menu.Item key = {`${item.title}-menu`} active = {item.path === active}><a href={item.path}>{item.title}</a></Menu.Item>)}
        </Menu>
      </TopBar.Item>
      <TopBar.Item>
        <Button success onClick = {logOut}>{user}</Button>
      </TopBar.Item>
    </TopBar>
  )

}

NavBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  active: PropTypes.string,
  user: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
}


export default NavBar