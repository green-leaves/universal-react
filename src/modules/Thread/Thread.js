import React from 'react';


class Thread extends React.Component {
    render() {
        console.log(this.props.params.threadId);
        return (
            <div>
                <div>Thread Id: {this.props.params.threadId}</div>
            </div>
        )
    }
}

export default Thread;
