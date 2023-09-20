import React, { memo } from 'react'
import { text } from '../ultils/dataContact'
import Button from './Button'

const Contact = () => {
    return (
        <div className='border-dashed border-4 border-sky-200 bg-white rounded-md shadow-sm p-4 w-3/5 flex flex-col justify-center items-center gap-6'>
            <img
                src={text.image}
                alt="thumbnail"
                className='w-full h-48 object-contain'
            />
            <p className=''>{text.content}</p>
            <div className='flex items-center justify-around w-full'>
                {text.contacts.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <span className='text-orange-600 font-semibold'>{item.text}</span>
                            <span className='text-blue-700 text-[24px] font-semibold'>{item.phone}</span>
                            <span className='text-blue-700 text-[24px] font-semibold'>{item.zalo}</span>
                        </div>
                    )
                })}
            </div>
            <Button
                text='Gửi liên hệ'
                bgColor='bg-blue-600'
                textColor='text-white'
                px='px-6'
            />
        </div>
    )
}

export default memo(Contact)