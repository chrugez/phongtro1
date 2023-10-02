import React, { memo } from 'react'

const InputFormV2 = ({ label, unit, value, setValue, name, small }) => {
    return (
        <div>
            <label className='font-medium' htmlFor="title">{label}</label>
            <div className='flex items-center'>
                <input
                    type="text"
                    id='title'
                    className={`flex-auto ${unit ? 'rounded-l-md' : 'rounded-md'} outline-none border border-gray-300 p-2`}
                    value={value || ''}
                    onChange={(e) => setValue(prev => ({ ...prev, [name]: e.target.value }))}
                />
                {unit && <span className='p-2 bg-gray-400 flex-none rounded-r-md flex items-center border border-gray-200 justify-center'>{unit}</span>}
            </div>
            {small && <small className='opacity-70'>{small}</small>}
        </div>
    )
}

export default memo(InputFormV2)