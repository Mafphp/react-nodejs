import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import Vehicle from './Vehicle';

function Vehicles() {
    const [vehicles, updateVehicles] = useState([]);

    useEffect(() => {
        getVehicles();
    }, []);
    const getVehicles = async () => {
        const result = await axios.get(`http://localhost:3001/vehicles`);
        console.log(result);
        updateVehicles(result.data || []);
    }
    
    return (
        <div className="row">{vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}/>)}</div>
    )
}

export default Vehicles;