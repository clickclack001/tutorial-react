import React from 'react';

const ButtonComponent = (props) => {
    return (
        <button type={props.type} className={'my-button'}>{props.children}</button>
    );
};

export default ButtonComponent;