import React from 'react';

function Input({label, key_field, onChangeHandler}) {
   
    return (
        <div className="form-group-inline col-md-6">
            <label htmlFor={`${label}-label`}>{label}</label>
            <input type="text" name="name" className="form-control" onChange={(e) => onChangeHandler(e.target.value, key_field)}/>
        </div>
    )
}

export default Input;