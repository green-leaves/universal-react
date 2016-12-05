import React from 'react';
import {Link} from 'react-router';


class ThreadLink extends React.Component {
    render() {
        return(
            <div>
                <Link to={`/thread/${this.props.id}`}>{this.props.title}</Link>
            </div>
        )
    }
}

export default ThreadLink;