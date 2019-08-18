import React from 'react';
import ReactDOM from 'react-dom';
import NumerologyReport from './NumerologyReport';
import { BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const historyMock = { push: jest.fn() };
  ReactDOM.render(
    <BrowserRouter>
      <NumerologyReport history={historyMock} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});