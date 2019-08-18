import React from 'react';
import ReactDOM from 'react-dom';
import RegStep1 from './RegStep1';
import { BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
            <RegStep1 />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});