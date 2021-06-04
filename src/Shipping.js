import React from 'react';
import { useRecoilState } from 'recoil';
import { shippingState } from './state';

function Shipping({ destinations }) {
    const [shipping, setShipping] = useRecoilState(shippingState);

    return (
        <div className="container">
            <h2 className="title">Shipping</h2>
            {Object.entries(destinations).map(([country, price]) => {
                return <button key={country} className="button" onClick={() => setShipping(country)}>
                    {country} ${price}
                    {country === shipping ? <span> 🐑</span> : null}
                </button>
            })}
        </div>
    )
};

export default Shipping;
