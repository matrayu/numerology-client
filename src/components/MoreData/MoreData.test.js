import React from 'react';
import ReactDOM from 'react-dom';
import MoreData from './MoreData';
import { BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
            <MoreData />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});