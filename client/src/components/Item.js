import React, { memo } from 'react'
import icons from '../ultils/icons'

const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/e1ff0d06dbad09f350bc_1693359997.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/279a6494b13f63613a2e_1693359996.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/78d8fdf6285dfa03a34c_1693359989.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/4a5f4d4098eb4ab513fa_1693359991.jpg",
]

const { GrStar,
    AiFillHeart,
    AiOutlineHeart,
    BsFillBookmarkStarFill } = icons

const Item = () => {
    return (
        <div className='w-full flex border-t border-orange-600 p-1'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center'>
                <img src={images[0]} alt="preview" className='w-[120px] h-[120px] object-cover' />
                <img src={images[1]} alt="preview" className='w-[120px] h-[120px] object-cover' />
                <img src={images[2]} alt="preview" className='w-[120px] h-[120px] object-cover' />
                <img src={images[3]} alt="preview" className='w-[120px] h-[120px] object-cover' />
            </div>
            <div className='w-3/5 pl-2'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-600 font-medium uppercase'>
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        <GrStar className='star-item' size={18} color='yellow' />
                        Cho thuê căn hộ mini mới xây đầy đủ tiện nghi sát bến xe miền tây
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsFillBookmarkStarFill size={24} color='orange' />
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between text-sm'>
                    <span className='font-bold text-green-600'>5.5 triệu/tháng</span>
                    <span>24m2</span>
                    <span>Quận Bình Tân, Hồ Chí Minh</span>
                </div>
                <p className='text-gray-500'>
                    Nhà mới xây xong trang bị đầy đủ tiện nghi, mỗi phòng đều có máy lạnh,máy giặt,ti vi và ban công phơi đồ riêng, chỗ để xe rộng rãi. Ngay chợ, bến…
                </p>
                <div className='flex items-center my-5 justify-between'>
                    <div className='flex items-center'>
                        <img src="https://anubis.gr/wp-content/uploads/2018/03/no-avatar.png" alt="avatar" className='w-[30px] h-[30px] object-cover rounded-full' />
                        <p>Tinh Tan</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            type='button'
                            className='bg-blue-700 text-white px-1 rounded-md'
                        >
                            Gọi 0913261071
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