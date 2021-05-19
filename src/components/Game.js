import React from 'react';

class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div className="game_left">
                    <h1>Left img</h1>
                </div>
                <div className="game_vs">
                    <h1>VS.</h1>
                </div>
                <div className="game_right">
                    <h1>Right img</h1>
                </div>
            </div>
        );
    }
}

export default Game;