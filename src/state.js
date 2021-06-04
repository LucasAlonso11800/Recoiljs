import {
    atom,
    selector,
} from 'recoil';
import { inventory, destinations } from './App';

export const cartState = atom({
    key: 'cartState',
    default: {}
});

export const shippingState = atom({
    key: 'shippingState',
    default: 'US'
});

export const totalsState = selector({
    key: 'totalsState',
    get: ({ get }) => {
        const cart = get(cartState);
        const shipping = get(shippingState);
        const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) => {
            return acc + inventory[id].price * quantity
        }, 0);

        return {
            subtotal: subtotal,
            shipping: destinations[shipping],
            total: subtotal + destinations[shipping]
        }
    }
})