import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRecoilState } from 'recoil';
import { currencyState } from '../atoms/currencyAtom';
import { currencies } from '../data/currencies'
import Logo from '../public/logo.png'

const Navbar = () => {
    const [currencyId, setcurrencyId] = useRecoilState(currencyState);

    console.log(currencyId)

    return (
        <div className='flex items-center justify-between p-4'>
            <Link href="/">
                <a>
                    <Image
                        height={35}
                        width={35}
                        objectFit='contain'
                        src={Logo}
                        alt="logo"
                    />
                </a>
            </Link>

            <select
                value={currencyId}
                onChange={e => setcurrencyId(e.target.value)}
                className='border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none'
            >
                {currencies.map(currency => (
                    <option key={currency.name} value={currency.name}>
                        {currency.name.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Navbar
