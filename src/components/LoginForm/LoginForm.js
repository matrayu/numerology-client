import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = NumReportContext

  state = {
    username: '',
    password: '',
    error: null
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        this.context.setUserData(res.userData)
        this.context.setLogin()
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        console.error(res.error)
        this.setState({ error: res.error })
      })
  }

  handleChange = ev => {
    const target = ev.target;
    const value = target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  handleDemoLogin = () => {
    const username = 'kobe24'
    const password = 'Tester12#'
    this.setState({
      username: username,
      password: password,
      error: null
    })
  }

  render() {
    const state = this.state
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              value={state.username}
              onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={state.password}
              onChange={this.handleChange}
          />
        </div>
        <div className='login__btns'>
          <button className="btn btn-success btn-block">Login</button>
          <button className="btn btn-success btn-block" onClick={this.handleDemoLogin}>Demo Login</button>
        </div>
      </form>
    )
  }
}