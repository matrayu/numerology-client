import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import NumReportContext from '../../contexts/NumReportContext'

export default class Header extends Component {
    static contextType = NumReportContext

    state = {
        loggedIn: this.context.isLoggedIn
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        this.context.setLogin()
    }

    renderLogoutLink() {
        return (
          <div className='navbar__btns'>
            <Link to='/numerology-chart'>My Chart</Link>
            <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
          </div>
        )
    }
    
    renderLoginLink() {
        return (
            <div className='navbar__btns'>
                <Link id='login' to='/login'>Log in</Link>
                <Link className='btn btn-primary btn-register' to='/register'>Get Started</Link>
            </div>
        )
    }

    render() {
        return (
            <>
                <nav className='Header navbar'>
                    <div className='container d-flex'>
                        <div className='navbar__brand'>
                            <Link to='/' className='logo'>Simple Numerology</Link>
                            <div className='image__logo' />
                        </div>
                        <div className='navbar__btns d-flex align-items-center'>
                            {TokenService.hasAuthToken()
                                    ? this.renderLogoutLink()
                                    : this.renderLoginLink()
                            }
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}