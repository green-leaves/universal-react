import React from 'react';
import ThreadLink from '../../components/ThreadLink/ThreadLink';


class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <ThreadLink id="1" title="Lorem ipsum dolor sit amet"></ThreadLink>
                    <ThreadLink id="2" title="Sed ut perspiciatis unde omnis iste natus error"></ThreadLink>
                    <ThreadLink id="3" title="At vero eos et accusamus et iusto odio dignissimos"></ThreadLink>
                    <ThreadLink id="4" title="Et harum quidem rerum facilis est et expedita distinctio"></ThreadLink>
                </ul>
            </div>
        )
    }
}

export default Home;
