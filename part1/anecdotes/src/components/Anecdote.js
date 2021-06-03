import React from 'react'
import { Title } from './Title'

const Anecdote = (props) => {
    return (
        <div>
            <Title name={props.name} />
            <p>
                {props.anecdote}
            </p>
            <p>
                This anecdote has {props.point} votes.
            </p>
        </div>
    );
};

export { Anecdote };