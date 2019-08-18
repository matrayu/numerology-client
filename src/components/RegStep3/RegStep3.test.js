import React from 'react';
import ReactDOM from 'react-dom';
import RegStep3 from './RegStep3';
import { BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
            <RegStep3 />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});