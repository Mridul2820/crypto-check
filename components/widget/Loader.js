import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-112px)]'>
            <img
                src='/crypto.png'
                alt="logo"
                className='h-40 w-40 animate-ping p-5 opacity-60'
            />
        </div>
    )
}

export default Loader
