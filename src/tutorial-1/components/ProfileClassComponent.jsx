import React from "react";

class ProfileClassComponent extends React.Component {

    dateToStr(date){
        return date.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="badge">
                        <span className="badge__hello">Привет, <b>{this.props.name}!</b></span>
                        <p className="badge__date">Дата регистрации: {this.dateToStr(this.props.registredAt)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileClassComponent;