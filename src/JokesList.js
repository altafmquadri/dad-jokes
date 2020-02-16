import React, { Component } from 'react';
import './JokesList.css'
import Joke from './Joke'


const JokesApi = 'https://icanhazdadjoke.com/'

class JokesList extends Component {
    static defaultProps = {
        jokeNumber: 10
    }
    state = {
        jokes: [],
        isLoaded: false
    }

    increaseScore = (id) => {
        console.log('click', id)
        this.setState(st => ({
            jokes: st.jokes.map(stJ => {
                if (stJ.id === id) {
                    stJ.score++
                    return stJ
                } else {
                    return stJ
                }
            })
        }))
    }


    decreaseScore = (id) => {
        console.log('click', id)
        this.setState(st => ({
            jokes: st.jokes.map(stJ => {
                if (stJ.id === id) {
                    stJ.score--
                    return stJ
                } else {
                    return stJ
                }
            })
        }))
    }

    componentDidMount() {
        for (let i = 0; i < this.props.jokeNumber; i++) {
            fetch(JokesApi, {
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(res => res.json())
                .then(j => {
                    if (!this.state.jokes.find(stJ => stJ.id === j.id)) {
                        this.setState(
                            {
                                jokes: [...this.state.jokes, { ...j, score: 0 }]
                            }, () => this.setState({ isLoaded: true }))
                    }
                })
        }
    }

    result = () => {
        return !this.state.isLoaded ? <h1>Loading...</h1>
            : <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>Dad</span>Jokes
                    </h1>
                    <img alt="smiley face" src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                    <button className="JokeList-getmore">New Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    <Joke
                        jokes={this.state.jokes}
                        increaseScore={this.increaseScore}
                        decreaseScore={this.decreaseScore} />
                </div>
            </div>
    }


    render() {

        return (
            this.result()
        );
    }
}

export default JokesList;