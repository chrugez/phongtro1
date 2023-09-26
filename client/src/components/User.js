import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const User = () => {

    const { currentData } = useSelector(state => state.user)

    return (
        <div className='flex items-center gap-2'>
            <img
                src={currentData?.avatar || 'https://anubis.gr/wp-content/uploads/2018/03/no-avatar.png'}
                alt="avatar"
                className='h-12 w-12 rounded-full object-cover border-2 border-white shadow-md'
            />
            <div className='flex flex-col'>
                <span>Xin chào, <span className='font-semibold'>{currentData?.name}</span></span>
                <span>Mã tài khoản: <span className='font-medium'>{`${currentData?.id.slice(0, 5)}...`}</span></span>
            </div>
        </div>
    )
}

export default memo(User)