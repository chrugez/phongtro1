import React, { memo } from 'react'

const SItem = ({ title, price, image, createdAt }) => {
    return (
        <div className='w-full flex items-center gap-2 border-b border-gray-300 py-2'>
            <img
                src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/12/24/z3981800425596-23a37a57e16eb1ddb1aff9169aef3610_1671849570.jpg"
                alt="anh"
                className='w-[65px] h-[65px] object-cover rounded-md'
            />
            <div className='flex flex-col justify-between w-full gap-1'>
                <h4 className='text-blue-600 text-sm'>{`${title?.slice(0, 40)}...`}</h4>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-medium text-green-500 text-xs'>{price}</span>
                    <span className='text-gray-300 text-xs'>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(SItem)