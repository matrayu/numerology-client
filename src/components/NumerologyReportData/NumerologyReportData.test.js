import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { mount } from 'enzyme';
import NumerologyReportData from './NumerologyReportData';
import NumReportContext from '../../contexts/NumReportContext'
import context from '/Users/mfriedberg1/Documents/Projects/numerology/client/src/contexts/testHelpers.jsx'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import ReactTestUtils from 'react-dom/test-utils'
import { act } from 'react-dom/test-utils'
import { renderIntoDocument, cleanup } from '@testing-library/react'

import PropTypes from 'prop-types'


import ShallowRenderer from 'react-test-renderer/shallow';
Enzyme.configure({ adapter: new Adapter() });

NumerologyReportData.contextTypes = {
    userData: PropTypes.any,
}

it('renders', () => {
    const context = { userData: jest.fn() }
    shallow(<NumerologyReportData />, { context })
})


/* Enzyme.configure({ adapter: new Adapter() });

const karmic_lessons = [2,4]

it('renders without crashing', () => {
    const div = document.createElement('div');

    const { userData } =  { userData: {karmic_lessons: [2,4]}}
    
    ReactDOM.render(
        <BrowserRouter>
            <NumReportContext.Provider value={context}>
                <NumerologyReportData/>
            </NumReportContext.Provider>
        </BrowserRouter> , div)
    ReactDOM.unmountComponentAtNode(div);
}); */