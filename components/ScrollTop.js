import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollTop = () => {
    const [showTop, setShowTop] = useState(false)

    const showScrollButton = () => {
        if(window.scrollY >= 50) {
            setShowTop(true)
        }
        else {
            setShowTop(false)
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', showScrollButton)
    }

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scroll(0, 0)
        }
    }

    const ScrollActive = 'right-5 opacity-1'
    const ScrollInActive = 'right-[-100%] opacity-0'

    return (
        <div onClick={scrollToTop} className={`fixed bottom-14 bg-custom-blue p-1 rounded-full text-white shadow-bs2 cursor-pointer z-50 transition-all duration-300 ${showTop ? ScrollActive : ScrollInActive}`}>
            <IoIosArrowUp size="24px" />
            {/* {showTop ? 'ScrollInActive' : ''} */}
        </div>
    )
}

export default ScrollTop
