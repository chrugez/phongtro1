import React, { useState } from 'react'
import { Address, Overview, Loading, Button } from '../../components'
import icons from '../../ultils/icons'
import { apiUploadImages } from '../../services'
import { getCodesAreas, getCodesPrices } from '../../ultils/Common/getCodes'
import { useSelector } from 'react-redux'

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
    const [isLoading, setIsLoading] = useState(false)
    const { prices, areas } = useSelector(state => state.app)

    const handleFiles = async (e) => {
        e.stopPropagation()
        setIsLoading(true)
        let images = []
        const files = e.target.files
        const formData = new FormData()
        for (let i of files) {
            formData.append('file', i)
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
            const response = await apiUploadImages(formData)
            if (response.status === 200) images = [...images, response?.data?.secure_url]
        }
        setImagesPreview(prev => [...prev, ...images])
        setPayload(prev => ({ ...prev, images: [...prev.images, ...images] }))
        setIsLoading(false)
    }

    const handleDeleteImage = (image) => {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        setPayload(prev => ({ ...prev, images: prev.images.filter(item => item !== image) }))
    }

    const handleSubmit = () => {
        let priceCodeArr = getCodesPrices(+payload.priceNumber, prices, 1, 15)
        let priceCode = priceCodeArr[0]?.code
        let areaCodeArr = getCodesAreas(+payload.areaNumber, areas, 0, 90)
        let areaCode = areaCodeArr[0]?.code
        let finalPayload = {
            ...payload,
            priceCode,
            areaCode
        }
        console.log(finalPayload)
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
                                {isLoading ? <Loading /> : <div className='flex flex-col items-center justify-center'>
                                    <BsFillCameraFill size={50} />
                                    Thêm ảnh
                                </div>}
                            </label>
                            <input onChange={handleFiles} type="file" id='file' hidden multiple />
                            <div className='w-full'>
                                <h3 className='font-medium'>Ảnh đã chọn</h3>
                                <div className='flex gap-4 items-center'>
                                    {imagesPreview?.map(item => {
                                        return (
                                            <div key={item} className='relative w-1/3 h-1/3'>
                                                <img src={item} alt="preview" className='w-full h-full object-cover rounded-md' />
                                                <div
                                                    className='absolute top-0 right-0 w-8 h-8 font-semibold text-lg bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-full flex items-center justify-center'
                                                    title='Xóa'
                                                    onClick={() => handleDeleteImage(item)}
                                                >
                                                    x
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleSubmit} text='Tạo mới' bgColor='bg-green-600' textColor='text-white' />
                    <div className='h-[500px]'></div>
                </div>
                <div className='w-1/3 flex-none'>
                    map
                    <Loading />
                </div>

            </div>
        </div>
    )
}

export default CreatePost