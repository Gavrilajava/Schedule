import React, { useState } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../presentational/LoginForm'
import PropTypes from 'prop-types'
import { API_ROOT, getHeaders, throwError } from '../../api'


const LoginFormContainer = ({ logIn }) => {

  // form controls:
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  // submit form data:
  const submit = () => {
    fetch(API_ROOT + '/login', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ name, password })
    })
      .then(resp => resp.json())
      .then(json => json.error ? throwError(json.error) : json)
      .then(userInfo => userInfo.token ? logIn(userInfo) : throwError("Token not received"))
      .catch(e => setError(e.message))
  }


  return(
    <LoginForm
      error = {error}
      name = {name}
      setName = {setName}
      password = {password}
      setPassword = {setPassword}
      submit = {submit}
    />
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return { logIn: (auth) => dispatch({ type: 'login', auth: auth }) }
}

LoginFormContainer.propTypes = {
  logIn: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
