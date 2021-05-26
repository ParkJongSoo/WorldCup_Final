import React, { useState, useEffect } from 'react';
import Contents from './Contents';

const Body = () => {
    const [subject, setSubject] = useState({id : 1, class : "전체", selected : true});//selected subject
    const [content, setContent] = useState([]);

    const selectSubject = (subject) => {
        setSubject(subject);
        navSubject.map(nav => subject.id === nav.id? nav.selected = true : nav.selected = false);
        //console.log(subject.class);
        //console.log(subject.selected);
        //console.log(navSubject)
    }
    const selectedContentsData = contentsData.map(content => {
        if(subject.class === "전체"){
            return content;
        }else if (content.subject === subject.class){
            return content;
        }
    })

    return(
        <>
            <ul className="navBar">
                <li className="navBar_search">
                    <img src="/images/search.png" className="navBar_search_icon"/>
                </li>
                {navSubject.map(s => 
                    <li 
                    key={s.id} 
                    className="navBar_sub" 
                    selected={s.selected} 
                    onClick={() => selectSubject(s)}>{s.class}</li>
                )}
            </ul>
            <Contents subject={subject} contentsData={selectedContentsData}/>
        </>
    );
}

const navSubject = [//전달받아야하는 데이터1
    {id : 1, class : "전체", selected : false},
    {id : 2, class : "음식", selected : false},
    {id : 3, class : "영화", selected : false},
    {id : 4, class : "동물", selected : false}
]

const contentsData = [//전달받아야하는 데이터2
    {
        id : 1,
        subject : "음식",
        title : '든든한 국밥 월드컵',
        item : [
            {
                id : 1,
                name : "돼지국밥",
                img : 'http://placeimg.com/64/64/1',
                count : 0
            },
            {   
                id : 2,
                name : "순대국밥",
                img : 'http://placeimg.com/64/64/2',
                count : 0
            },
            {
                id : 3,
                name : "굴국밥",
                img : 'http://placeimg.com/64/64/3',
                count : 0
            },
            {
                id : 4,
                name : "콩나물국밥",
                img : 'http://placeimg.com/64/64/4',
                count : 0
            },
        ]
    }, 
    {
        id : 2,
        subject : "영화",
        title : '썸타는 사람과 같이 보고 싶은 영화 월드컵',
        item : [
            {
                id : 1,
                name : "러브,로지",
                img : 'http://placeimg.com/64/64/5',
                count : 0
            },
            {
                id : 2,
                name : "비긴어게인",
                img : 'http://placeimg.com/64/64/6',
                count : 0
            },
            {
                id : 3,
                name : "부산행",
                img : 'http://placeimg.com/64/64/7',
                count : 0
            },
            {
                id : 4,
                name : "인터스텔라",
                img : 'http://placeimg.com/64/64/8',
                count : 0
            },
        ]
    },
    {
        id : 3,
        subject : "동물",
        title : '인생에서 한번쯤 키워보고 싶은 동물 월드컵',
        item : [
            {
                id : 1,
                name : "강아지",
                img : 'http://placeimg.com/64/64/9',
                count : 0
            },
            {
                id : 2,
                name : "고양이",
                img : 'http://placeimg.com/64/64/10',
                count : 0
            },
            {
                id : 3,
                name : "사자",
                img : 'http://placeimg.com/64/64/11',
                count : 0
            },
            {
                id : 4,
                name : "캥거루",
                img : 'http://placeimg.com/64/64/12',
                count : 0
            },
        ]
    },
]

export default Body;