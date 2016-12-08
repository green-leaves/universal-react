import React from 'react';


class Thread extends React.Component {
    render() {
        return (
            <div>
                <div>Thread Id: {this.props.params.threadId}</div>
            </div>
        )
    }
}

export default Thread;
