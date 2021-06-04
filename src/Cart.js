import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState } from './state';

function Cart({inventory}) {
    const cart = useRecoilValue(cartState);
    return (
        <div className="container">
            <h2 className="title">Cart</h2>
            {Object.keys(cart).length === 0 ? 
            <p>No items yet</p> : 
            <ul>
                {Object.entries(cart).map(([id, quantity]) => {
                    return <li key={id}>{inventory[id].name} x {quantity}</li>
                })}    
            </ul>}
        </div>
    )
}

export default Cart
