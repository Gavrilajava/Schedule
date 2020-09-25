import React from 'react'
import PropTypes from 'prop-types'
import Row from 'harmonium/lib/Row'
import Col from 'harmonium/lib/Col'
import Card from 'harmonium/lib/Card'
import Input from 'harmonium/lib/Input'
import Button from 'harmonium/lib/Button'

const LoginForm = ({ name, setName ,password, setPassword, submit, error}) => {

  return(
    <div className = "container" >
      <Row>
        <Col small ={6} large = {4} smallCentered>
          <Card>
            <Row>
              <Col>
                <h3>Log In</h3>
              </Col>
              <Col>
                <Input.Stack label="Name" value = {name} onChange = {e => setName(e.target.value)} error={error}/>
                <Input.Stack type = "password" label="Password" value = {password} onChange = {e => setPassword(e.target.value)} />
              </Col>
              <Col>
                <Button onClick = {submit}>Log In</Button>
              </Col>
            </Row>
          </Card> 
        </Col>
      </Row>
    </div>
  )
}

LoginForm.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default LoginForm
