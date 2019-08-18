import React from 'react';
import ReactDOM from 'react-dom';
import RegStep2 from './RegStep2';
import { BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
            <RegStep2 />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});