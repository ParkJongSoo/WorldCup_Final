import React, {useState, useEffect} from 'react';

const Game = ({gameData}) =>{
    

    const items = gameData.item;

    console.log(items);

    return(
    <div className="contents">
            <div className="game">
                <div className="game_title">{gameData.title}</div>
                <div className="game_board">
                    <div className="game_left">
                        <div className="game_left_img">
                            <img src={gameData.item[0].img} alt="left-image"/>
                        </div>
                        <div className="game_left_name">
                            {gameData.item[0].name}
                        </div>
                    </div>
                    <div className="game_right">
                        <div className="game_right_img">
                            <img src={gameData.item[1].img} alt="right-image"/>
                        </div>
                        <div className="game_right_name">
                            {gameData.item[1].name}
                        </div>
                    </div>
                </div>
            </div>        
        </div>  
    );
}

export default Game;