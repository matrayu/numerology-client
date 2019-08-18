import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
import NumerologyReportData from '../NumerologyReportData/NumerologyReportData';
import NumerologyReportHeader from '../NumerologyReportHeader/NumerologyReportHeader';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class NumerologyReport extends Component {
    static contextType = NumReportContext

    getUserData() {
        if (TokenService.hasAuthToken()) {
            AuthApiService.getUserData()
              .then(res => {
                this.context.setUserData(res.userData)
              })
        }
    }

    render() {
        const { error } = this.context
        return (
            <section className='NumerologyReport'>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : !(TokenService.hasAuthToken())
                        ? this.props.history.push('/')
                        : (this.context.userData.length === 0)
                            ? this.getUserData()
                            :<section className='NumerologyReport'>
                                <NumerologyReportHeader />
                                <NumerologyReportData />
                                </section>
                            }
            </section>
        )
    }
}

export default NumerologyReport;