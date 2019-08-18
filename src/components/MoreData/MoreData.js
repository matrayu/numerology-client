import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoreData extends Component {
    render() {
        return (
            <div className='MoreData'>
                <section className='section__coming-soon'>
                    <h1>Coming Soon</h1>
                    <ul>
                        <li>Destiny Number</li>
                            <p>Your destiny number shows the direction you <i>must</i> take, representing the only opportunities for success that will be made available to you.</p>
                        <li>Life Cycles</li>
                            <p>Everyone has three life cycles. Each cycle -- for its duration -- impacts your destiny by representing additional circumstances and conditions that must be taken into consideration.</p>
                        <li>Turning Points</li>
                            <p>There are four turing points. They represent events that may occur during the life cycle they conicide with.</p>
                        <li>Challenges</li>
                            <p>There are two minor challenges and one major challenge. These are the areas where you have trouble centering yourself -- where you tend to go to extremes. The challenges are weaknesses to which you are prone, stumbling blocks that must be dealt with before you can attain success or happiness.</p>
                        <li>Personal Years</li>
                            <p>Our lives operate on a nine-year cycle, which keep repeating themselves. Each of these years, from 1 to 9, has its own vibrations, whihc cannot be avoided. Each year has its own set of influences, opportunities, and obstacles. Be knowing what to expect in advance, you can prepare yourself to take advanctage of the opportunities and avoid the pitfalls.</p>
                        <li>Astrological Influences</li>
                            <p>The astrological influences run in a cycle of twelve. They spell out specific happenings and describe what your personal year will revolve around.</p>
                    </ul>
                </section>
                <div className='signup__container'>
                    <div className='signup__btn text-center'>
                        <Link className="btn btn-register upper" to='/numerology-chart'>Back To My Chart</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreData;