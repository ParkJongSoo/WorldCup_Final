import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul className="navBar">
                    <Search/>
                    {subList.map(x => {
                        return(
                            <Subject
                                id={x.id}
                                selected={x.selected}
                                title={x.title}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class Search extends React.Component{
    render(){
        return(
            <div className="navBar_search">
                
                <img src="/images/search.png" alt="icon of the search" className="navBar_search_icon"/>
            </div>
        );
    }
}

const subList = [
    {id : 1, selected : true, title : "음식"},
    {id : 2, selected : false, title : "영화"},
    {id : 3, selected : false, title : "동물"},
    {id : 4, selected : false, title : "연예인"},
]

//음식, 영화 등의 주제
class Subject extends React.Component{
    render(){
        return(
            <li key={this.props.id} selected={this.props.selected}>{this.props.title}</li>
        );
    }
}

export default Nav;