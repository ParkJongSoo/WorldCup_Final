import { Button } from 'bootstrap';
import React from 'react';

class Contents extends React.Component{
    render(){
        return(
            <div className="contents">
                <Content/>
                <Content/>
                <Content/>
                <Content/>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
                <img src="http://placeimg.com/64/64/1" className="card-img-top" alt="content"/>
                <div className="card-body">
                    <p className="card-text">세상에서 가장 맛없는 음식 월드컵</p>
                    <div className="card-body_botton">
                        <button class="btn btn-success" type="submit">시작하기</button>
                        <button class="btn btn-primary" type="submit">공유하기</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;