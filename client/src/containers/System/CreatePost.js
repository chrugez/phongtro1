import React, { useState } from 'react'
import { Address, Overview } from '../../components'
import icons from '../../ultils/icons'
import { apiUploadImages } from '../../services'

const { BsFillCameraFill } = icons


const CreatePost = () => {

    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceNumber: 0,
        areaNumber: 0,
        images: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',
        province: ''
    })
    const [imagesPreview, setImagesPreview] = useState([])
    // console.log(payload);

    const handleFiles = async (e) => {
        e.stopPropagation()
        let images = []
        const files = e.target.files
        const formData = new FormData()
        for (let i of files) {
            formData.append('file', i)
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
            const response = await apiUploadImages(formData)
            if (response.status === 200) images = [...images, response?.data?.secure_url]
        }
        setImagesPreview(images)
        setPayload(prev => ({ ...prev, images: JSON.stringify(images) }))
    }

    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
            <div className='flex flex-auto gap-4'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address payload={payload} setPayload={setPayload} />
                    <Overview payload={payload} setPayload={setPayload} />
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
                            <input onChange={handleFiles} type="file" id='file' hidden multiple />
                            <div className='w-full'>
                                <h3 className='font-medium'>Ảnh đã chọn</h3>
                                <div className='flex gap-4 items-center'>
                                    {imagesPreview?.map(item => {
                                        return (
                                            <img key={item} src={item} alt="preview" className='w-1/3 h-1/3 object-cover rounded-md' />
                                        )
                                    })}
                                </div>
                            </div>
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