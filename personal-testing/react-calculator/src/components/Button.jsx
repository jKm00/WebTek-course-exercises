import React from 'react';

const Button = ({label, value, onClick}) => {

    const onBtnClick = () => {
        onClick(value);
    }

    return(
        onClick ? (
            <button onClick={onBtnClick}>{label}</button>
        ) : (
            <button>{label}</button>
        )
    )
}

export default Button