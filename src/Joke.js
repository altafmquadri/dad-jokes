import React from 'react';
import './Joke.css'

const Joke = (props) => {
    return (
        props.jokes.map(j => (
            <div key={j.id}
                className='Joke'>
                <div className="Joke-buttons">
                    <i
                        onClick={() => props.increaseScore(j.id)}
                        className="fas fa-arrow-up fa-2x"></i>
                    <span>{j.score}</span>
                    <i
                        onClick={() => props.decreaseScore(j.id)}
                        className="fas fa-arrow-down fa-2x"></i>
                </div>
                <div className="Joke-text">
                    {j.joke}
                </div>
            </div>
        ))
    )
}

export default Joke