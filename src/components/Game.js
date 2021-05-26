import React, {useState, useEffect} from 'react';

const Game = ({gameData}) =>{
    const [lists, setLists] = useState([])
    const [displays, setDisplays] = useState([]);
    const items = gameData.item;
    var roundCount = 0;
    //해야할 일 -> 게임 기능 구현 -> 선택 후 다음 이미지 렌더링
    
    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setLists(items);
        setDisplays([items[0],items[1]]);
    },[]);

    const chooseList = (list) =>{
        displays.map(d => {
            if(d.id === list.id){
                d.count += 1;
            }else if (d.id !== list.id){
                d.count -= 1;
            }
        })
        items = items.filter(i => i.count === roundCount)
        setLists(items);
        console.log(items);
    }
    return(
    <div className="contents">
            <div className="game">
                <div className="game_title">{gameData.title}</div>
                <div className="game_board">
                    {displays.map(d => {
                        return(
                            <div className="game_list" key={d.name} onClick={() => chooseList(d)}>
                                <div className="game_list_img">
                                    <img src={d.img} alt="left-image"/>
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