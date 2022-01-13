import React from 'react';

const NotFound = ({ statusText, code }) => {
    return (
        <div className="app-user">
            <h2>{code+' '+statusText}</h2>
        </div>
    );
};

export default NotFound;