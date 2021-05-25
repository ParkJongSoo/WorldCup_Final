import React, { useState, useEffect, createContext } from 'react';
import Game from './Game';

const Contents = ({subject, contentsData}) => {
    const [mode, setMode] = useState("list")
    const [gameData, setGameData] = useState()
    const filteredContentsData = contentsData.filter(e => e !== undefined);
    console.log(filteredContentsData)

    const startGame = (content) =>{//game모드로 변경 후 게임 데이터 state 업데이트
        setMode("game");
        var temp = filteredContentsData.map(c => {
            if(c.id === content.id){
                return c;
            }
        })
        temp = temp.filter(e => e != undefined)
        setGameData(temp[0])
    }
    console.log(gameData);
    if(mode === "list"){
        return(
            <div className="contents">
            {filteredContentsData.map(c => 
                    <div className="card" style={{width: "18rem"}} key={c.id}>
                        <img src={c.item[0].img} className="card-img-top" alt="card image"/>
                        <div className="card-body">
                            <p className="card-text">{c.title}</p>
                            <div className="card-body_botton">
                                <button className="btn btn-success" type="submit" onClick={() => startGame(c)}>시작하기</button>
                                <button className="btn btn-primary" type="submit">공유하기</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        );
    }else if(mode === "game"){
        console.log(gameData)
        return(
            <Game gameData={gameData}/>
        );
    }
}

export default Contents;
