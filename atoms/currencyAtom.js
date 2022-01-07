import { atom } from 'recoil';

export const currencyState = atom({
    key: 'currencyIdState',
    default: typeof window !== 'undefined' && localStorage.getItem('currency') || 'inr',
});