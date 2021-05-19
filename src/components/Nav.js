import React from 'react';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            subList : this.props.subList
        }
    }
    
    render(){
        return(
            <div>
                <ul className="navBar">
                    <Search/>
                    {this.state.subList.map(x => {
                        return(
                            <Subject
                                id={x.id}
                                selected={x.selected}
                                title={x.title}
                                handleList={this.props.handleList}
                                />
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

//음식, 영화 등의 주제
class Subject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.title,
            selected : this.props.selected,
            title : this.props.title
        }
    }

    render(){
        return(
            <li 
            key={this.state.id}
            selected={this.state.selected}
            title={this.state.title}
            onClick={this.props.handleList}>
                {this.props.title}
            </li>
        );
    }
}

export default Nav;