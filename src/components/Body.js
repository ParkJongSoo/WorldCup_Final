import React from 'react';
import Nav from './Nav';
import Contents from './Contents';

class Body extends React.Component{
    constructor(props){
        super(props)
        this.state={
            subList : [
                {id : 0, title : "전체"},
                {id : 1, selected : false, title : "음식"},
                {id : 2, selected : false, title : "영화"},
                {id : 3, selected : false, title : "동물"},
                {id : 4, selected : false, title : "연예인"},
            ],
            content : [
                {
                    id : 1,
                    thumbnail : "http://placeimg.com/64/64/1",
                    thumbnail_alt : "this is alternative text",
                    title : "세상에서 가장 맛없는 음식 월드컵",
                    subject : "음식"
                },
                {
                    id : 2,
                    thumbnail : "http://placeimg.com/64/64/2",
                    thumbnail_alt : "this is alternative text",
                    title : "연인이랑 보기 좋은 영화 월드컵",
                    subject : "영화"
                 },
                 {
                    id : 3,
                    thumbnail : "http://placeimg.com/64/64/3",
                    thumbnail_alt : "this is alternative text",
                    title : "키우고 싶은 동물 월드컵",
                    subject : "동물"
                 },
                 {
                    id : 4,
                    thumbnail : "http://placeimg.com/64/64/4",
                    thumbnail_alt : "this is alternative text",
                    title : "가장 호감가는 남자 연예인 월드컵",
                    subject : "연예인"
                 },
              ],
            menu : ''
        }
        this.handleList = this.handleList.bind(this)
    }
    handleList(e){
        console.log(this.state.menu)
        this.setState({
            menu : e.target.title
        })
    }
    startGame(e){
        console.log("game started");
    }
    render(){
        return(
            <div className="body">
                <Nav subList={this.state.subList} handleList={this.handleList}/>
                <Contents content={this.state.content} menu={this.state.menu} startGame={this.startGame}/>
            </div>
        );
    }
}

export default Body;