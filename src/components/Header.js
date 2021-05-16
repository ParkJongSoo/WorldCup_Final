import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header_logo">
                    <img src="/title_logo.png" alt="title" onClick={function(){
                        console.log("title clicked");
                        //홈으로 돌아가는 처리, Title icon 필요
                    }}/>
                </div>
            </div>
        );
    }
}

export default Header;