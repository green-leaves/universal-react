import React from 'react';
import {Link} from 'react-router';


class ThreadLink extends React.Component {

    render() {
        return (
            <div className="thread-container">
                <div className="thread-info">
                    <Link className={this.props.className} to={`/thread/${this.props.id}`}>
                        <span className="">{this.props.title}</span>
                    </Link>
                    <div>
                        <small>John Doe</small>
                    </div>
                </div>
                <div className="thread-count">
                    <strong>143</strong>
                    <div>comments</div>
                </div>
                <div className="thread-count">
                    <strong>95</strong>
                    <div>votes</div>
                </div>
            </div>
        )
    }
}

export default ThreadLink;