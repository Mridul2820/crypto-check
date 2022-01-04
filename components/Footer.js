import React from 'react'

const Footer = () => {
    return (
        <div className='p-3 flex justify-center bg-slate-300'>
            &copy; {new Date().getFullYear()} Made with ❤  by
            <a className='ml-1' href="https://github.com/Mridul2820">Mridul</a>
        </div>
    )
}

export default Footer
