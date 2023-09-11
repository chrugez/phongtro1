import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-b-md'>
            <img
                src={image}
                alt={name}
                className='w-[190px] h-[110px] object-cover rounded-t-md'
            />
            <div className='font-medium text-blue-700 p-2 text-center'>{name}</div>
        </div>
    )
}

export default memo(ProvinceBtn)