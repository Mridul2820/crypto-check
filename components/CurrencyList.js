import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { currencyState } from '../atoms/currencyAtom';
import { currencies } from '../data/currencies'
import { RiCloseCircleFill } from 'react-icons/ri'

const CurrencyItems = ({ search, list, setCurDropdown }) => {
    const [currencyId, setcurrencyId] = useRecoilState(currencyState);

    const getCurrency = (code) => {
        setcurrencyId(code)
        if(typeof window !== 'undefined'){
            localStorage.setItem('currency', code)
        }
        setCurDropdown(false)
    }

    const filterList = list.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="grid gap-3 md:gap-4 grid-cols-1 mdgrid-cols-2 lg:grid-cols-3 overflow-hidden">
            {filterList.map(currency => (
                <div 
                    key={currency.code}
                    className={`flex gap-2 hover:bg-slate-100 py-1 px-2 cursor-pointer rounded-md select-none ${currencyId === currency.code && 'bg-slate-200'}`} 
                    onClick={() => getCurrency(currency.code)}
                >
                    <span className='uppercase text-slate-500'>{currency.code}</span>
                    <span>{currency.name}</span>
                </div>
            ))}
        </div>
    )
}

const CurrencyList = ({ setCurDropdown }) => {
    const [search, setSearch] = useState('')

    return (
        <div className='bg-white shadow-bs3 py-6 px-2 md:px-4 absolute top-16 right-4 left-4 md:left-[unset] z-50 rounded-md h-full min-h-[calc(100vh-120px)] overflow-y-scroll md:min-w-[65vw]'>
            <RiCloseCircleFill 
                className='absolute top-3 md:top-5 right-5 cursor-pointer'
                onClick={() => setCurDropdown(false)}
                size={24}
            />
            <div className="flex justify-center items-center mb-3 mt-6 md:mt-0">
                <input 
                    type="text" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Search Currency'
                    className='focus:outline-none outline-none shadow-sm focus:shadow-lg px-3 py-2 border-[1px] border-slate-400 rounded-md max-w-[300px] w-full'
                />
            </div>
            {currencies.map(category => (
                <div className="p-2 border-b-[1px] border-slate-300" key={category.id}>
                    <p className='font-bold text-base mb-3'>{category.type}</p>
                    <CurrencyItems 
                        search={search}
                        list={category.list}
                        setCurDropdown={setCurDropdown}
                    />
                </div>
            ))}
        </div>
    )
}

export default CurrencyList
