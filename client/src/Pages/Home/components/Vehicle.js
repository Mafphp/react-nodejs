import React from 'react';

function Vehicle({vehicle}) {
    return (
        <div className="col-3 m-3">
            <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">{}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Vehicle;