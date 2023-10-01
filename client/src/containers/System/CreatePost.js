import React from 'react'
import { Address, Overview } from '../../components'
import icons from '../../ultils/icons'

const { BsFillCameraFill } = icons


const CreatePost = () => {
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
            <div className='flex flex-auto gap-4'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address />
                    <Overview />
                    <div>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className='w-full'>
                            <label
                                htmlFor="file"
                                className='w-full border-2 flex flex-col items-center justify-center gap-4 border-dashed h-[200px] rounded-md border-gray-400 my-4'
                            >
                                <BsFillCameraFill size={50} />
                                Thêm ảnh
                            </label>
                            <input type="file" id='file' hidden />
                        </div>
                    </div>
                    <div className='h-[500px]'></div>
                </div>
                <div className='w-1/3 flex-none'>
                    map
                </div>

            </div>
        </div>
    )
}

export default CreatePost