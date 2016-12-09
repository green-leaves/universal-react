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
                title: "Lorem ipsum dolor sit amet",
                totalComments: 12,
                totalVotes: 120,
            },
            {
                id : "2",
                title: "Màn sương màu bạc tràn ngập khắp boong tàu.",
                totalComments: 3,
                totalVotes: 44,
            },
            {
                id : "3",
                title: "At vero eos et accusamus et iusto odio dignissimos",
                totalComments: 159,
                totalVotes: 1355,
            },
            {
                id : "4",
                title: "Et harum quidem rerum facilis est et expedita distinctio",
                totalComments: 2597,
                totalVotes: 45666,
            },
            {
                id : "6",
                title: "Lorem ipsum dolor sit amet",
                totalComments: 12,
                totalVotes: 120,
            },
            {
                id : "6",
                title: "Màn sương màu bạc tràn ngập khắp boong tàu.",
                totalComments: 3,
                totalVotes: 44,
            },
            {
                id : "7",
                title: "At vero eos et accusamus et iusto odio dignissimos",
                totalComments: 159,
                totalVotes: 1355,
            },
            {
                id : "8",
                title: "Et harum quidem rerum facilis est et expedita distinctio",
                totalComments: 2597,
                totalVotes: 45666,
            },
        ];
    }


    render() {
        return (
            <div className="">
                {this.state.threads.map(thread => (
                    <ThreadLink className="" thread={thread} key={thread.id} id={thread.id} title={thread.title}></ThreadLink>
                ))}
            </div>
        )
    }
}

export default Home;
