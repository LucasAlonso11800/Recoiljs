import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalsState } from './state';

function Totals() {
    const totals = useRecoilValue(totalsState);
    return (
        <div className="container">
            <h2 className="title">Totals</h2>
            <p>Subtotal: ${totals.subtotal.toFixed(2)}</p>
            <p>Shipping: ${totals.shipping.toFixed(2)}</p>
            <p><strong>Total: ${totals.total}</strong></p>
        </div>
    )
}

export default Totals
