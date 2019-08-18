import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumReportContext from '../../contexts/NumReportContext'
import HelpersService from '../../services/helpers-service'
import NumListItem from '../../components/NumListItem/NumListItem'


export default class NumerologyReportData extends Component {
    static contextType = NumReportContext

    renderArr(arr, data) {
        return arr.map((num, idx) => 
            <NumListItem
                key={idx}
                number={num}
                numData={data}
            />
        )
    }

    render() {
        const { userData = [] } = this.context

        return (
            <div className='NumerologyReportData'>
                <section className='section'>
                    <div className='section__container'>
                        <div className='image__motivation image'>
                            <div id='motivation' className='number'>{userData.motivation}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Motivation</h2>
                            <div>{HelpersService.getMotivation(userData.motivation)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__inner_self image'>
                            <div id='inner-self' className='number'>{userData.inner_self}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Inner-Self</h2>
                            <div>{HelpersService.getInnerSelf(userData.inner_self)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__expression image'>
                            <div id='expression' className='number'>{userData.expression}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Expression</h2>
                            <div>{HelpersService.getExpression(userData.expression)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__karmic_lessons image'>
                        <div id='karmic-lessons' className='number'>{userData.karmic_lessons.join(', ')}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Karmic Lessons</h2>
                            {(userData.karmic_lessons.length > 0) 
                                ? <div>{this.renderArr(userData.karmic_lessons, 'karmic')}</div>
                                : <div className='paragraph'>It seems you have no lessons to learn!</div>
                            }
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__hidden_tendencies image'>
                            <div id='hidden-tendencies' className='number'>{userData.hidden_tendencies.join(', ')}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Hidden Tendencies</h2>
                            {(userData.hidden_tendencies.length > 0) 
                                ? <div>{this.renderArr(userData.hidden_tendencies, 'hidden')}</div>
                                : <div className='paragraph'>You don't appear to have any hidden tendencies!</div>
                            }
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__subconscious_response image'>
                            <div id='subconscious-response' className='number'>{userData.subconscious_response}</div>
                        </div>
                        <div className='data__text'>
                            <h2>Subconscious Response</h2>
                            <div>{HelpersService.getSubconciousResponse(userData.subconscious_response)}</div>
                        </div>
                    </div>
                </section>
                <div className='signup__container'>
                    <div className='signup__btn text-center'>
                        <Link className="btn btn-register upper" to='/more-data'>More Data</Link>
                    </div>
                </div>
            </div>
        )
    }
}