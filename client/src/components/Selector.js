import React, {useEffect, useState} from 'react';
import * as axios from 'axios';

function Selector({label, key_field, fetch, onChangeHandler}) {
    const [brands, updateData] = useState([]);
    useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      const result = await axios.get(`http://localhost:3001/${fetch}`)
      updateData(result.data || [])
    }
    return (
        <div className="form-group-inline col-md-6">
            <label htmlFor={`${label}-label`}>{label}</label>
            <select className="custom-select"  onChange={(e) => onChangeHandler(e.target.value, key_field)}>
                <option value="0">Choose {label}</option>
                {brands.map(brand => (<option key={brand.id} value={brand.id}>{brand.name}</option>))}
            </select>
        </div>
    )
}

export default Selector;