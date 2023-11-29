import React, { memo } from 'react'
import noAvatar from '../assets/no-avatar.png'
import icons from '../ultils/icons'
import { Button } from './'

const { GoDotFill, BsFillTelephoneFill, SiZalo } = icons

const BoxInfo = ({ userData }) => {
    return (
        <div className='w-full bg-yellow-500 rounded-md flex flex-col items-center p-4 gap-4'>
            <img src={noAvatar} alt="avatar" className='w-16 h-16 rounded-full object-contain ' />
            <h3 className='font-medium text-xl'>{userData?.name}</h3>
            <span className='flex gap-1 items-center'>
                <GoDotFill color='green' />
                <span>Đang hoạt động</span>
            </span>
            <a className='bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg' href="/">
                <BsFillTelephoneFill />{userData?.phone}
            </a>
            <a className='bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md font-bold text-lg' href={`https://zalo.me/${userData?.zalo}`}>
                <SiZalo size={32} color='blue' />
            </a>
        </div>
    )
}

export default memo(BoxInfo)