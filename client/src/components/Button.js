import React, { memo } from 'react'


const Button = ({ text, textColor, bgColor, icAfter, onClick, fullWidth, px }) => {
    return (
        <button
            type='button'
            className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md flex items-center justify-center gap-1 hover:underline`}
            onClick={onClick}
        >
            {text}
            {icAfter && icAfter}
        </button>
    )
}

export default memo(Button)