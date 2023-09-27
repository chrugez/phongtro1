import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import noAvatar from '../assets/no-avatar.png'

const User = () => {

    const { currentData } = useSelector(state => state.user)

    return (
        <div className='flex items-center gap-2'>
            <img
                src={currentData?.avatar || noAvatar}
                alt="avatar"
                className='h-12 w-12 rounded-full object-cover border-2 border-white shadow-md'
            />
            <div className='flex flex-col'>
                <span>Xin chào, <span className='font-semibold'>{currentData?.name}</span></span>
                <span>Mã tài khoản: <span className='font-medium'>{currentData?.id?.match(/\d/g)?.slice(0, 6)}</span></span>
            </div>
        </div>
    )
}

export default memo(User)