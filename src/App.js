import React from 'react';
import { RecoilRoot } from 'recoil';
import AvailableItems from './AvailableItems';
import Cart from './Cart';
import './App.css';

const inventory = {
    a: { name: 'Yerba', price: 10 },
    b: { name: 'Coffee', price: 15 },
    c: { name: 'Tea', price: 8 }
};

const destinations = {
    US: 25,
    CA: 35,
    CO: 45
};

function App() {
    return (
        <RecoilRoot>
            <AvailableItems inventory={inventory} />
            <Cart />
        </RecoilRoot>
    );
};

export default App;
