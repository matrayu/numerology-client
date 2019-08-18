import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { NumReportProvider } from '../../contexts/NumReportContext'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <NumReportProvider>
            <App />
        </NumReportProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
