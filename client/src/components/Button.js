import React from 'react';

function Button({text, onClickHandler}) {
   
    return (
        <div className="mt-2 col-4">
            <button className="btn btn-block btn-success" onClick={onClickHandler}>{text}</button>
        </div>
    )
}

export default Button;