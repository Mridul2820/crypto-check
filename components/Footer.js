import React from 'react'

const Footer = () => {
    return (
        <div className='p-3 flex justify-center bg-slate-200'>
            &copy; {new Date().getFullYear()} Made with ❤ by
            <a 
                className='ml-1' 
                href="https://www.mridul.tech/"
                target='_blank'
                rel='noreferrer'
            >
                Mridul
            </a>
        </div>
    )
}

export default Footer
