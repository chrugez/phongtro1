import React, { memo } from 'react'
import { Select, InputReadOnly, InputFormV2 } from './'
import { useSelector } from 'react-redux'

const targets = ([
    { code: 'Nam', value: 'Nam' },
    { code: 'Nữ', value: 'Nữ' }
])

const Overview = ({ payload, setPayload }) => {
    const { categories } = useSelector(state => state.app)
    const { currentData } = useSelector(state => state.user)
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
            <div className='w-ful flex flex-col gap-4'>
                <div className='w-1/2 '>
                    <Select value={payload.categoryCode} setValue={setPayload} name='categoryCode' label='Loại chuyên mục' options={categories} />
                </div>
                <InputFormV2 value={payload.title} setValue={setPayload} name='title' label='Tiêu đề' />
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor="description">Nội dung mô tả</label>
                    <textarea
                        id="description"
                        cols="30" rows="10"
                        className='w-full rounded-md outline-none border border-gray-300'
                        value={payload.description}
                        onChange={(e) => setPayload(prev => ({ ...prev, description: e.target.value }))}
                    ></textarea>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <InputReadOnly label='Thông tin liên hệ' value={currentData?.name || currentData?.username} />
                    <InputReadOnly label='Điện thoại' value={currentData?.phone} />
                    <InputFormV2 value={payload.priceNumber} setValue={setPayload} name='priceNumber' small='Nhập đầy đủ số, ví dụ 1 triệu là 1000000' label='Giá cho thuê' unit='đồng' />
                    <InputFormV2 value={payload.areaNumber} setValue={setPayload} name='areaNumber' label='Diện tích' unit='m2' />
                    <Select value={payload.target} setValue={setPayload} name='target' label='Đối tượng cho thuê' options={targets} />
                </div>
            </div>

        </div>
    )
}

export default memo(Overview)