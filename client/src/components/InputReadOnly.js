import React, { memo } from 'react'

const InputReadOnly = ({ label, value }) => {
    return (
        <div>
            <label htmlFor="exactly-address" className='font-medium'>{label}</label>
            <input
                type="text"
                id='exactly-address'
                readOnly
                className='border border-gray-200 rounded-md bg-gray-100 outline-none p-2 w-full'
                value={value || ''}
            />
        </div>
    )
}

export default memo(InputReadOnly)