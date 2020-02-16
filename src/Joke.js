import React from 'react';
import './Joke.css'

const Joke = (props) => {
    const getColor = (score) => {
        if (score >= 15) {
            return '#4CAF50';
        } else if (score >= 12) {
            return "#8BC34A"
        } else if (score >= 9) {
            return "#CDDC39"
        } else if (score >= 6) {
            return "#FFEB3B"
        } else if (score >= 3) {
            return "#FFC107"
        } else if (score >= 0) {
            return "#FF9800"
        }
    }

    const getEmoji = (score) => {
        if (score >= 15) {
            return 'em em-rolling_on_the_floor_laughing'
        } else if (score >= 12) {
            return "em em-laughing"
        } else if (score >= 9) {
            return "em em-smiley"
        } else if (score >= 6) {
            return "em em-slightly_smiling_face"
        } else if (score >= 3) {
            return "em em-neutral_face"
        } else if (score >= 0) {
            return "em em-confused"
        } else {
            return 'em em-angry'
        }
    }
    return (
        props.jokes.map(j => (
            <div key={j.id}
                className='Joke'>
                <div className="Joke-buttons">
                    <i
                        onClick={() => props.increaseScore(j.id)}
                        className="fas fa-arrow-up"></i>
                    <span style={{ borderColor: getColor(j.score) }}
                        className="Joke-votes">{j.score}</span>
                    <i
                        onClick={() => props.decreaseScore(j.id)}
                        className="fas fa-arrow-down"></i>
                </div>
                <div className="Joke-text">{j.joke}</div>
                <div className="Joke-smiley">
                    <i class={getEmoji(j.score)}
                        aria-label={getEmoji(j.score)}>
                    </i>
                </div>
            </div>
        ))
    )
}

export default Joke