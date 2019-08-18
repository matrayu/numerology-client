import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'

class HomeSplash extends Component {
    render() {
        return (
            <main className='HomeSplash' role="main">
                <section className='header container text-center'>
                    <div className='card__container d_flex'>
                        <div className='section__1 header__1 section1__card'>
                            <h2 className='uppercase'>What is Numerology?</h2>
                            <h3>Numerology is technology dating back many centuries, to at least Pythagoras in the sixth century B.C., and probably even farther back to the peoples of ancient Egypt, China or India.</h3>
                        </div>
                        <div className='section__1 header__2 section1__card'>
                            <h2 className='uppercase'>Unlock The Mysteries of Life</h2>
                            <h3>Do you have a desire to know who you really are? To find out what really motivates you? To understand the lessons you must learn?</h3>
                        </div>
                        <div className='section__1 header__3 section1__card'>
                            <h2 className='uppercase'>Gain deep insights</h2>
                            <h3>Using just two data points, we'll create a numerology chart which will provide a wealth of infomation about yourself.</h3>
                        </div>
                    </div>
                </section>
                <section className='cards container'>
                    <div className='card card__1 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Motivation Number</h2>
                            <p>Your motivation number will describe the motive behind the decisions you make and the way you act. It's what makes you tick.</p>
                        </div>
                    </div>
                    <div className='card card__2 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Inner-self Number</h2>
                            <p>Your inner-self number revels what your secret dreams are made of, how the inner person within you pictures yourself. It is often the first impression other people obtain of you before getting to know you.</p>
                        </div>
                    </div>
                    <div className='card card__3 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Expression Number</h2>
                            <p>Your expression number will describe how you interact with other people. It tells how you best express yourself in life and where your talents lie.</p>
                        </div>
                    </div>
                    <div className='card card__4 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Karmic Lessons</h2>
                            <p>Your karmic lessons describe the things you are supposed to learn in this life.</p>
                        </div>
                    </div>
                    <div className='card card__5 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Hidden Tendencies</h2>
                            <p>Your hidden tendencies describe desires to which you have been exposed to in the past. Because of their overemphasis in your chart, they must be watch so you do not go overboard with them.</p>
                        </div>
                    </div>
                    <div className='card card__6 bkgnd__color__grey'>
                        <div className='card__text centered'>
                            <h2>Subconscious Response</h2>
                            <p>Your subconscious response number tells how you instinctively and automatically react when faced with an emergency situation.</p>
                        </div>
                    </div>
                </section>
                <section className='how-it-works container'>
                    <div>
                        <div className='hw__container'>
                            <h1>How It Works</h1>
                        </div>
                        <div className='section__3 d_flex name'>
                            <div className='section__3_image name__image'></div>
                            <div className='name__text section__3_card_text'>
                                <h2 className='uppercase'>Your Name</h2>
                                <p>The numbers hidden in your name describe your personality, your inner self, what makes you tick, how others see you, and where your hidden talents lie.</p>
                            </div>
                        </div>
                        <div className='section__3 d_flex dob row_reverse'>
                            <div className='section__3_image dob__image'></div>
                            <div className='dob__text section__3_card_text'>
                                <h2 className='uppercase'>Your Birth Date</h2>
                                <p>Your birth date describes the influences, opportinuties, and obstacles that will be present during your life. It can show you what alternatives are available to you and what the probable outcome of each will be.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='signup__container'>
                    <div className='signup__btn text-center'>
                        {TokenService.hasAuthToken()
                            ? <Link className="btn btn-register upper" to='/numerology-chart'>My Chart</Link>
                            : <Link className="btn btn-register upper" to='/register'>Create My Chart</Link>
                        }
                    </div>
                </div>
            </main>
        )
    }
}

export default HomeSplash