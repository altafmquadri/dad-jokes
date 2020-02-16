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
                        className="fas fa-arrow-up"></i>
                    <span className="Joke-votes">{j.score}</span>
                    <i
                        onClick={() => props.decreaseScore(j.id)}
                        className="fas fa-arrow-down"></i>
                </div>
                <div className="Joke-text">{j.joke}</div>
                <div className="Joke-smiley">
                    <i class="em em-rolling_on_the_floor_laughing"
                        aria-label="ROLLING ON THE FLOOR LAUGHING">
                    </i>
                </div>
            </div>
        ))
    )
}

export default Joke