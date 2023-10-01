import React, { memo } from 'react'

const InputFormV2 = ({ label, unit }) => {
    return (
        <div>
            <label className='font-medium' htmlFor="title">{label}</label>
            <div className='flex items-center'>
                <input
                    type="text"
                    id='title'
                    className={`flex-auto ${unit ? 'rounded-l-md' : 'rounded-md'} outline-none border border-gray-300 p-2`}
                />
                {unit && <span className='p-2 bg-gray-400 flex-none rounded-r-md flex items-center border border-gray-200 justify-center'>{unit}</span>}
            </div>
        </div>
    )
}

export default memo(InputFormV2)