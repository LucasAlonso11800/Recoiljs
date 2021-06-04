import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from './state';

function AvailableItems({ inventory }) {
    const [cart, setCart] = useRecoilState(cartState);

    return (
        <div className="container">
            <h2 className="title">Available Items</h2>
            <ul>
                {Object.entries(inventory).map(([id, { name, price }]) => {
                    return (
                        <li key={id}>
                            {name} ${price.toFixed(2)}
                            <button className="button" onClick={() => setCart({ ...cart, [id]: (cart[id] || 0) + 1 })}>Add</button>
                            {cart[id] ? <button className="button" onClick={() => {
                                const copy = { ...cart };
                                if (copy[id] === 1) {
                                    delete copy[id];
                                    setCart(copy)
                                }
                                else {
                                    setCart({ ...copy, [id]: copy[id] - 1 })
                                }
                            }}>Remove</button> : null}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default AvailableItems
