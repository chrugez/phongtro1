import React, { memo } from 'react'

const InputFormV2 = ({ label, unit, value, setValue, name, small, invalidFields, setInvalidFields, direction }) => {
    return (
        <div className={`flex ${direction ? direction : 'flex-col'}`}>
            <label className='w-48 flex-none font-medium' htmlFor="title">{label}</label>
            <div className='flex flex-auto flex-col items-center'>
                <div className='flex w-full items-center'>
                    <input
                        type="text"
                        id='title'
                        className={`flex-auto ${unit ? 'rounded-l-md' : 'rounded-md'} outline-none border border-gray-300 p-2`}
                        value={value || ''}
                        onChange={(e) => setValue(prev => ({ ...prev, [name]: e.target.value }))}
                        onFocus={() => setInvalidFields && setInvalidFields([])}
                    />
                    {unit && <span className='p-2 bg-gray-400 flex-none rounded-r-md flex items-center border border-gray-200 justify-center'>{unit}</span>}
                </div>
                {invalidFields?.some(item => item.name === name) && <small className='text-red-500 block w-full'>
                    {invalidFields?.find(item => item.name === name)?.message}
                </small>}
            </div>
            {small && <small className='opacity-70 whitespace-nowrap'>{small}</small>}

        </div>
    )
}

export default memo(InputFormV2)