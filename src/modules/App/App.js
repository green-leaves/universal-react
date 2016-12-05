import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>Header</div>
                {this.props.children}
            </div>
        )
    }
}

export default App
