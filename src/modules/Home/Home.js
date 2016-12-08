import React from 'react';
import ThreadLink from '../../components/ThreadLink/ThreadLink';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {threads: [], text: ''};
    }

    componentWillMount() {
        console.log('Before Home Loading');
        this.state.threads = [
            {
                id : "1",
                title: "Lorem ipsum dolor sit amet"
            },
            {
                id : "2",
                title: "Sed ut perspiciatis unde omnis iste natus error"
            },
            {
                id : "3",
                title: "At vero eos et accusamus et iusto odio dignissimos"
            },
            {
                id : "4",
                title: "Et harum quidem rerum facilis est et expedita distinctio"
            },
        ];
    }


    render() {
        return (
            <div className="">
                {this.state.threads.map(thread => (
                    <ThreadLink className="" key={thread.id} id={thread.id} title={thread.title}></ThreadLink>
                ))}
            </div>
        )
    }
}

export default Home;
