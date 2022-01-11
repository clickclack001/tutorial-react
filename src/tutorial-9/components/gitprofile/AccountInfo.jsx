import React from 'react';

const AccountInfo = ({ account }) => {

    const convert = (num) => {
        return (num / 1000) < 1 ? num : (num / 1000).toFixed(1) + 'к'
    }

    return (
        <div className="app-user" >
            <div className="app-user_info">
                <div className="app-user_image">
                    <img src={account.avatar_url} alt="avatar" />
                </div>
                <div className="app-user_data">
                    <h1 className="app-user_name">
                        {account.name}
                        <span>@{account.login.toLowerCase()}</span>
                    </h1>
                    <p className="app-user_about">
                        {account.bio}
                    </p>
                </div>
            </div>
            <ul className="app-user_stats">
                <li className="app-user_stats-item">
                    Репозитории <br/>
                    <span>{convert(account.public_repos)}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписчиков <br/>
                    <span>{convert(account.followers)}</span>
                </li>
                <li className="app-user_stats-item">
                    Подписки <br/>
                    <span>{convert(account.following)}</span>
                </li>
            </ul>
            <ul className="app-user_location">
                <li className="app-user_location-item">{account.location}</li>
                <li className="app-user_location-item">
                    <a href="http://archakov.im">{account.blog}</a>
                </li>
            </ul>
        </div>
    );
};

export default AccountInfo;