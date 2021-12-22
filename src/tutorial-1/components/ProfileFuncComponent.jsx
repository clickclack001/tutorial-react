import React from 'react';


const ProfileFuncComponent = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Домашнее задание к уроку №1</h1>
            <div className="container">
                <div className="badge">
                    <span className="badge__hello">Привет, <b>{props.name}!</b></span>
                    <p className="badge__date">Дата регистрации: {dateToStr(props.registredAt)}</p>
                </div>
            </div>
        </div>
    );
};

function dateToStr(date){
    return date.toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
}


export default ProfileFuncComponent;