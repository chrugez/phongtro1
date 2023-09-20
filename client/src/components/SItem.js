import React, { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi'

const SItem = ({ title, price, image, createdAt }) => {

    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow()
    }

    return (
        <div className='w-full flex items-center gap-2 border-b border-gray-300 py-2'>
            <img
                src={image[0]}
                alt="anh"
                className='w-[65px] h-[65px] object-cover flex-none rounded-md'
            />
            <div className='flex flex-auto flex-col justify-between w-full gap-1'>
                <h4 className='text-blue-600 text-sm'>{`${title?.slice(0, 40)}...`}</h4>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-medium text-green-500 text-xs'>{price}</span>
                    <span className='text-gray-300 text-xs'>{formatTime(createdAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(SItem)