import React from 'react';
import { render } from 'react-dom'
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);