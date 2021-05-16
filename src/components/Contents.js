import React from 'react';

const content = [
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
  ]

class Contents extends React.Component{
    render(){
        return(
            <div className="contents">
                {
                    content.map(v => {
                        return(
                            <Content
                                key={v.id}
                                id={v.id}
                                thumbnail={v.thumbnail}
                                thumbnail_alt={v.thumbnail_alt}
                                title={v.title}/>
                        );
                    })
                }
            </div>
        );
    }
}


class Content extends React.Component{
    render(){
        return(
            <div id={this.props.id} className="card" style={{width: "18rem"}}>
                <img src={this.props.thumbnail} className="card-img-top" alt={this.props.thumbnail_alt}/>
                <div className="card-body">
                    <p className="card-text">{this.props.title}</p>
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