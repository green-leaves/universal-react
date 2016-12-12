import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                        <header id="header" className="App-header">
                        <div id="header-navigation" className="Header-navigation"><div className="Navigation ButtonGroup "></div></div>
                        <div className="container">
                            <div className="Header-title pull-left">
                                <Link to="/"  id="home-link">
                                    9chan
                                </Link>
                            </div>
                            <div className="Header-primary pull-left">
                                <ul className="Header-controls">
                                    <li><Link to="/"  className="Button Button--link">Home</Link></li>
                                    <li><Link to="/"  className="Button Button--link">Guidelines</Link></li>
                                    <li><Link to="/"  className="Button Button--link">FAQ</Link></li>
                                    <li><Link to="/">Chat</Link></li>
                                    <li><Link to="/">Report a Bug</Link></li>
                                </ul>
                            </div>
                            <div className="Header-secondary pull-right">
                                <ul className="Header-controls">
                                    <li><Link to="/"  className="Button Button--link">Login</Link></li>
                                    <li><Link to="/"  className="Button Button--link">Sign up</Link></li>
                                </ul>
                            </div>
                        </div>
                        </header>
                    </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;
