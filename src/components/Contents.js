import React from 'react';

class Contents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subject : this.props.subject,
            menu : this.props.menu
        }
    }
    render(){
        return(
            <div className="contents">
                {
                    this.props.content.map(c => {
                        //if(c.subject === this.state.menu){
                            return(
                                <Content
                                    key={c.id}
                                    id={c.id}
                                    thumbnail={c.thumbnail}
                                    thumbnail_alt={c.thumbnail_alt}
                                    title={c.title}
                                    startGame={this.props.startGame}
                                    />
                                );
                            //}
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
                        <button class="btn btn-success" type="submit" onClick={this.props.startGame}>시작하기</button>
                        <button class="btn btn-primary" type="submit">공유하기</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;