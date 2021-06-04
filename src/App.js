import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';

import AvailableItems from './AvailableItems';
import Cart from './Cart';
import Shipping from './Shipping';
import Totals from './Totals';

export const inventory = {
    a: { name: 'Yerba', price: 10 },
    b: { name: 'Coffee', price: 15 },
    c: { name: 'Tea', price: 8 }
};

export const destinations = {
    US: 25,
    CA: 35,
    CO: 45
};

function App() {
    return (
        <RecoilRoot>
            <AvailableItems inventory={inventory} />
            <Cart inventory={inventory} />
            <Shipping destinations={destinations} />
            <Totals />
        </RecoilRoot>
    );
};

export default App;
