import React, {useState, useEffect} from 'react';

const Game = ({gameData}) =>{
    const [lists, setLists] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winLists, setWinLists] = useState([]);
    const [round, setRound] = useState(gameData.roundOf);
    const [set, setSet] = useState(1);
    const items = gameData.item;
    const setNumber = round/2;

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setLists(items);
        setDisplays([items[0],items[1]]);
    },[]);

    const chooseList = (list) =>{
        if(round/2 === set){
            setRound(round/2);
            setSet(1);
        }else{
            setSet(set + 1);
        }
        if(lists.length <= 2){
            if(winLists.length === 0){
                setDisplays([list]);
            }else{
                let updateList = [...winLists, list];
                setLists(updateList);
                setDisplays([updateList[0], updateList[1]]);
                setWinLists([]);
            }
        }else if(lists.length > 2){
            setWinLists([...winLists, list]);
            setDisplays([lists[2], lists[3]]);
            setLists(lists.slice(2));//2부터 끝까지 추출
        }
    }
    return(
    <div className="contents">
            <div className="game">
                <div className="game_title">{gameData.title}</div>
                <div className="game_roundSet">
                {round === 2? "결승전" : round === 1? "WINNER" : round + "강 " + set + "세트"}
                </div>
                <div className="game_board">
                    {displays.map(d => {
                        return(
                            <div className="game_list" key={d.name} onClick={() => chooseList(d)}>
                                <div className="game_list_img">
                                    <img src={d.img} alt="image"/>
                                </div>
                                <div className="game_list_name">
                                    {d.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>        
        </div>  
    );
}

export default Game;