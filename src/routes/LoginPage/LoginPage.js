import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/numerology-chart'
    history.push(destination)
  }

  render() {
    return (
      <section className='LoginPage'>
        <div className='form_container'>
          <h2>Sign In</h2>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </section>
    )
  }
}