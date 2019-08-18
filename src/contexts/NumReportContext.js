import React, { Component } from 'react'

const NumReportContext = React.createContext({
  userData: [],
  error: null,
  isLoggedIn: false,
  setError: () => {},
  clearError: () => {},
  setUserData: () => {},
  setLogin: () => {},
})
export default NumReportContext

export class NumReportProvider extends Component {
  state = {
    userData: [],
    error: null,
    isLoggedIn: false,
  };

  setLogin = () => {
    let log = !this.state.isLoggedIn
    this.setState({ isLoggedIn: log })
  }

  setUserData = userData => {
    this.setState({ userData })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      userData: this.state.userData,
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setError: this.setError,
      clearError: this.clearError,
      setUserData: this.setUserData,
      setLogin: this.setLogin,
    }
    return (
      <NumReportContext.Provider value={value}>
        {this.props.children}
      </NumReportContext.Provider>
    )
  }
}
