import React, { Component } from 'react';
import RegStep1 from '../../components/RegStep1/RegStep1';
import RegStep2 from '../../components/RegStep2/RegStep2';
import RegStep3 from '../../components/RegStep3/RegStep3';
import AuthApiService from '../../services/auth-api-service'
import NumReportContext from '../../contexts/NumReportContext'
import './RegistrationPage.css'

export default class RegistrationPage extends Component {
    static contextType = NumReportContext

    setUserDataContext(userData) {
        const { history } = this.props
        this.context.clearError()
        this.context.setUserData(userData)
        this.context.setLogin()
        history.push('/numerology-chart')
    }

    state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '',
        confirmPassword: '',
        passwordMatch: false,
        first_name: '',
        middle_name: '',
        last_name: '',
        dob: '',
        isValid: false,
        error: null
    }

    

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
        
    handleSubmit = event => {
        event.preventDefault()
        if (!this.state.isValid) {
            return
        }


        const { email, username, password, first_name, middle_name, last_name, dob } = this.state
        this.setState({ error: null })
        AuthApiService.postUser({
            username: username,
            password: password,
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            email: email,
            dob: dob

        })
        .then(user => {
            this.setState({
                username: '',
                password: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                dob: ''
            })
            this.setUserDataContext(user.userData)
        })
        .catch(res => {
            console.error(res.error)
            this.setState({ 
                isValid: false,
                error: res.error 
            })
        })
    }

    checkUsername = () => {
        if (this.state.username.length === 0) {
            this.setState({ error: 'Please enter a valid username' })
            return false
        } else {
            this.setState({ error: null })
            return true
        }
    }

    checkPassword = () => {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (this.state.password.length === 0) {
            this.setState({ error: 'Please enter a valid password' })
            return false
        } else {
            if (!re.test(String(this.state.password))) {
                this.setState({ error: 'Passwords must be 8 characters and include at least 1 lowercase, 1 uppercase, 1 numeric, and 1 special character.'})
                return false
            } else {
                if (this.state.password !== this.state.confirmPassword) {
                    this.setState({ error: 'Passwords do not match' })
                    return false
                }
            }
        }
        this.setState({ error: null })
        return true
    }

    checkEmail = () => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email.length === 0 || !re.test(String(this.state.email).toLowerCase())) {
            this.setState({ error: 'Please enter a valid email address' })
            return false
        } else {
            this.setState({ error: null })
            return true
        }
    }

    checkName = () => {
        if (this.state.first_name.length < 2 || this.state.last_name.length < 2) {
            this.setState({ error: 'Please enter a valid name' })
            return false
        }
        this.setState({ error: null })
        return true
    }

    _next = () => {
        let currentStep = this.state.currentStep
        if (currentStep === 1) {
            if (!this.checkUsername()) {
                return
            } else {
                if (!this.checkPassword()) {
                    return
                } else {
                    if (!this.checkEmail()) {
                        return
                    }
                }
            }
        }

        if (currentStep === 2) {
            if (!this.checkName()) {
                return
            }
        }

        currentStep = currentStep >= 2
            ? 3
            : currentStep + 1
        this.setState({ currentStep: currentStep })
    }
        
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1
            ? 1
            : currentStep - 1
        this.setState({ currentStep: currentStep })
    }
  
  
    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button className="btn btn-secondary" type="button" onClick={()=>this._prev()}>Previous</button>
            )
        }
        return null;
        }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep === 3){
            return (
                <button type='submit' className="btn btn-success btn-block" disabled={!this.state.dob} onClick={()=> this.setState({ isValid: true })}>Sign up</button>   
            )
        }
        return (
            <button className="btn btn-primary float-right" type="button" onClick={()=>this._next()}>Next</button>
        )
    }

    renderStep1() {
        return (
            <RegStep1
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
            />  
        ) 
    }

    renderStep2() {
        return (
            <RegStep2
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                first_name={this.state.first_name}
                middle_name={this.state.middle_name}
                last_name={this.state.last_name}
            />
        )
        
    }

    renderStep3() {
        return (
            <RegStep3
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                dob={this.state.dob}
                isValid={this.state.isValid}
            />
        )
        
    }
    
    render() {
      return (
        <div className='RegistrationPage'>
            <div className='form_container'>
                <h2>Sign Up</h2>
                <p>Step {this.state.currentStep} </p> 
                
                <form onSubmit={e=>this.handleSubmit(e)}>
                    {(this.state.currentStep === 1) 
                        ? this.renderStep1() 
                        : (this.state.currentStep === 2) 
                            ? this.renderStep2() 
                            : this.renderStep3()
                    }
                    <div className={(this.state.error ? 'error' : 'hidden')}>{this.state.error}</div>
                    <div className='btn__container'>
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>
                </form>
            </div>
        </div>
      );
    }
}