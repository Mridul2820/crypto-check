import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';
import Logo from '../../public/logo.png'
import CurrencyList from '../CurrencyList';
import { IoMdArrowDropdown } from 'react-icons/io'

const Navbar = () => {
    const currencyId = useRecoilValue(currencyState);
    const [curDropdown, setCurDropdown] = useState(false)

    if (typeof document !== "undefined") {
        if(curDropdown){
            document.body.style.overflowY = "hidden"
        } else{
            document.body.style.overflowY = "scroll"
        }
    }

    return (
        <div className='relative flex items-center justify-between h-16 px-4 py-2 shadow-md border-b-[1px] border-slate-300'>
            <Link href="/">
                <a className='p-1 animate-rotate-slow'>
                    <Image
                        height={35}
                        width={35}
                        objectFit='contain'
                        src={Logo}
                        alt="logo"
                        priority={true}
                    />
                </a>
            </Link>

            <div 
                className="flex gap-1 items-center cursor-pointer select-none"
                onClick={() => setCurDropdown(!curDropdown)}
            >
                <span className="uppercase">{currencyId}</span>
                <IoMdArrowDropdown 
                    size={21}
                />
            </div>

            {curDropdown && 
                <CurrencyList 
                    curDropdown={curDropdown} 
                    setCurDropdown={setCurDropdown}
                />
            }
        </div>
    )
}

export default Navbar
