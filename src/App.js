import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from 'recoil';
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
            
        </RecoilRoot>
    );
}

export default App;
