import React, { useState } from 'react'
import { InputForm, Button } from '../../components'
import Swal from 'sweetalert2'

const Contact = () => {
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        content: ''
    })

    const handleSubmit = () => {
        Swal.fire('Thank you!', 'Phản hồi của bạn đã được chúng tôi ghi nhận', 'success').then(
            setPayload({
                name: '',
                phone: '',
                content: ''
            })
        )
    }
    return (
        <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-6'>Liên hệ với chúng tôi</h1>
            <div className='flex gap-4'>
                <div className='flex-1 flex flex-col h-fit gap-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-4 text-white'>
                    <h4 className='font-medium'>Thông tin liên hệ</h4>
                    <span>Chúng tôi biết bạn có nhiều sự lựa chọn. Nhưng cảm ơn vì đã chọn Phongtro123.com</span>
                    <span>Điện thoại: 0365892896</span>
                    <span>Email: cskh.phongtro123@gmail.com</span>
                    <span>Zalo: 0365892986</span>
                    <span>Viber: 0365892986</span>
                    <span>Địa chỉ: Số 37 ngõ 136/51 Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội</span>
                </div>
                <div className='flex-1 bg-white shadow-md rounded-md p-4 mb-6 '>
                    <h4 className='font-medium text-lg mb-4'>Liên hệ trực tuyến</h4>
                    <div className='flex flex-col gap-2'>
                        <InputForm
                            label='HỌ VÀ TÊN CỦA BẠN'
                            value={payload.name}
                            setValue={setPayload}
                            keyPayload='name'
                        />
                        <InputForm
                            label='SỐ ĐIỆN THOẠI'
                            value={payload.phone}
                            setValue={setPayload}
                            keyPayload='phone'
                        />
                        <div className='flex flex-col'>
                            <label htmlFor="description">NỘI DUNG MÔ TẢ</label>
                            <textarea
                                id="description"
                                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full'
                                cols="30"
                                rows="3"
                                value={payload.content}
                                onChange={e => setPayload(prev => ({ ...prev, content: e.target.value }))}
                                name='content'
                            />
                        </div>
                        <Button
                            text='Gửi liên hệ'
                            bgColor='bg-blue-500'
                            textColor='text-white'
                            fullWidth
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact