import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './modules/App/App';
import Home from './modules/Home/Home';
import Thread from './modules/Thread/Thread';


module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        {/*
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
        */}

        <Route path="/thread" component={Thread}>
            <Route path="/thread/:threadId" component={Thread} />
        </Route>
    </Route>
);