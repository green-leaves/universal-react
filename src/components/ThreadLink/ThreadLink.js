import React from 'react';
import {Link} from 'react-router';


class ThreadLink extends React.Component {

    render() {
        return (
            <div className="thread-container">
                <div className="thread-info">
                    <div className="text-muted">
                        <small>/s/{this.props.thread.sub}</small>
                    </div>
                    <Link className={this.props.className} to={`/thread/${this.props.thread.id}`}>
                        <span className="">{this.props.thread.title}</span>
                    </Link>
                    <div>
                        <small>John Doe</small>
                    </div>
                </div>
                <div className="thread-count">
                    <strong>{this.props.thread.totalComments}</strong>
                    <div>comments</div>
                </div>
                <div className="thread-count">
                    <strong>{this.props.thread.totalVotes}</strong>
                    <div>votes</div>
                </div>
            </div>
        )
    }
}

export default ThreadLink;