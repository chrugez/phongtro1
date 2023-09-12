import React, { memo, useState } from 'react'
import icons from '../ultils/icons'

const indexs = [0, 1, 2, 3]

const { GrStar,
    AiFillHeart,
    AiOutlineHeart,
    BsFillBookmarkStarFill } = icons

const Item = ({ images, user, title, star, description, attributes, address }) => {

    const [isHoverHeart, setIsHoverHeart] = useState(false)

    return (
        <div className='w-full flex border-t border-orange-600 py-2'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
                {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className='w-[110px] h-[140px] object-cover' />
                    )
                })}
                <span className='bg-overlay-70 text-white px-2 rounded-md text-sm absolute bottom-2 left-1'>{`${images.length} ảnh`}</span>
                <span
                    className='text-white text-sm absolute bottom-2 right-4'
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                >
                    {!isHoverHeart ? <AiOutlineHeart size={24} /> : <AiFillHeart size={24} color='red' />}
                </span>
            </div>
            <div className='w-3/5 pl-2'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-600 font-medium uppercase'>
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsFillBookmarkStarFill size={24} color='orange' />
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between text-sm'>
                    <span className='font-bold text-green-600'>{attributes?.price}</span>
                    <span>{attributes?.acreage}</span>
                    <span>{address}</span>
                </div>
                <p className='text-gray-500 w-full h-[75px] text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className='flex items-center my-5 justify-between'>
                    <div className='flex items-center'>
                        <img src="https://anubis.gr/wp-content/uploads/2018/03/no-avatar.png" alt="avatar" className='w-[30px] h-[30px] object-cover rounded-full' />
                        <p>{user?.name}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            type='button'
                            className='bg-blue-700 text-white px-1 rounded-md'
                        >
                            {`Gọi ${user?.phone}`}
                        </button>
                        <button
                            type='button'
                            className='hover:bg-blue-700 hover:text-white text-blue-700 rounded-md px-1 border border-blue-700 '
                        >
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)