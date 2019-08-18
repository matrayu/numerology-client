import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NumReportProvider } from './contexts/NumReportContext'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <NumReportProvider>
            <App />
        </NumReportProvider>
    </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
