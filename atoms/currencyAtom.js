import { atom } from 'recoil';

export const currencyState = atom({
    key: 'currencyIdState',
    default: 'inr',
});