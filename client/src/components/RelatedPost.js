import React, { memo } from 'react'
import SItem from './SItem'

const RelatedPost = () => {
    return (
        <div className='w-full bg-white rounded-md shadow-md p-4'>
            <h3 className='font-semibold text-lg mb-4'>Tin mới đăng</h3>
            <div className='w-full flex flex-col gap-2'>
                <SItem
                    title='CHO THUÊ NHÀ NGUYÊN CĂN GIÁ 1.8 TRIỆU/THÁNG - CHÍNH CHỦ'
                    price='1.8 triệu/tháng'
                    createdAt='Hôm nay'
                />
                <SItem
                    title='CHO THUÊ NHÀ NGUYÊN CĂN GIÁ 1.8 TRIỆU/THÁNG - CHÍNH CHỦ'
                    price='1.8 triệu/tháng'
                    createdAt='Hôm nay'
                />
                <SItem
                    title='CHO THUÊ NHÀ NGUYÊN CĂN GIÁ 1.8 TRIỆU/THÁNG - CHÍNH CHỦ'
                    price='1.8 triệu/tháng'
                    createdAt='Hôm nay'
                />
            </div>
        </div>
    )
}

export default memo(RelatedPost)