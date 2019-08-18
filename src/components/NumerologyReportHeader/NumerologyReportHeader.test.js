import React from 'react';
import ReactDOM from 'react-dom';
import NumerologyReportHeader from './NumerologyReportHeader';
import { NumReportProvider } from '../../contexts/NumReportContext'


it.skip('renders without crashing', () => {
    const div = document.createElement('div');

    const user = {karmic_lessons: [2,4]}

    ReactDOM.render(
            <NumReportProvider.Provider value={user}>
                <NumerologyReportHeader/>
            </NumReportProvider.Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});