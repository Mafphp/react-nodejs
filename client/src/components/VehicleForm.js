import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Input from "./Input";
import Selector from "./Selector";
import Button from "./Button";
import * as axios from 'axios';

function VehicleForm() {
    const initValues = {
        category_id: '',
        brand_id: '',
        model_id: '',
        name: '',
    };
    const [vehicleForm, updateFields] = useState(initValues);
    const onChangeHandler = (value, key) => {
        console.log(value);
        console.log(key);
        updateFields({
            ...vehicleForm,
            [key]: value
        });
    }
    const [isNew, onNew] = useState(false);
    const onClickHandler = async () => {
        if (Object.values(vehicleForm).some(value => !value)) {
            return alert('invalid data passed');
        }
        onNew(true);
        await axios.post('http://localhost:3001/vehicles/create', {...vehicleForm})
        updateFields(initValues);
    }
    return (
        <div className="center-center">
         {isNew ? <h1 className="">Car Successfully created <span><Link to="/home">see cars</Link></span></h1>: 
            <div className="form-row">
            <Input label="Vehicle Name" key_field="name" onChangeHandler={(e, key) => onChangeHandler(e, key)}/>
            <Selector label="Brand" fetch="brands" key_field="brand_id" onChangeHandler={onChangeHandler}/>
            <Selector label="Category" fetch="categories" key_field="category_id" onChangeHandler={onChangeHandler}/>
            <Selector label="Model" fetch="models" key_field="model_id" onChangeHandler={onChangeHandler}/>
            <Button text="Save" onClickHandler={onClickHandler}/>
        </div>}
        </div>
       
    ) 
}

export default VehicleForm;