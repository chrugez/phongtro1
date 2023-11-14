import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { checkStatus } from '../../ultils/Common/checkStatus'
import { Button, UpdatePost } from '../../components'

const ManagePost = () => {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const { postOfCurrent, dataEdit } = useSelector(state => state.post)

    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin())
    }, [])

    useEffect(() => {
        !dataEdit && setIsEdit(false)
    }, [dataEdit])

    return (
        <div className='flex flex-col gap-6 '>
            <div className='py-4 border-b border-gray-200 flex justify-between items-center'>
                <h1 className='text-3xl font-medium '>Quản lý tin đăng </h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="">Lọc theo trạng thái</option>
                </select>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className='flex items-center justify-center w-full bg-gray-100'>
                        <th className='border flex-1 py-2'>Mã tin</th>
                        <th className='border flex-1 py-2'>Ảnh đại diện</th>
                        <th className='border flex-1 py-2'>Tiêu đề</th>
                        <th className='border flex-1 py-2'>Giá</th>
                        <th className='border flex-1 py-2'>Ngày bắt đầu</th>
                        <th className='border flex-1 py-2'>Ngày hết hạn</th>
                        <th className='border flex-1 py-2'>Trạng thái</th>
                        <th className='border flex-1 py-2'>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {!postOfCurrent
                        ? <tr><td >Bạn chưa có tin đăng nào.</td></tr>
                        : postOfCurrent?.map(item => {
                            return (
                                <tr className='flex h-16' key={item.id}>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>{item?.overview?.code}</td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>
                                        <img src={JSON.parse(item?.images?.image)[0] || ''} alt="ảnh" className='w-10 h-10 object-cover rounded-md' />
                                    </td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>
                                        {item?.title.length > 30 ? `${item?.title?.slice(0, 30)}...` : item?.title}
                                    </td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>{item?.attributes?.price}</td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>{item?.overview?.created}</td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>{item?.overview?.expired}</td>
                                    <td className='border h-full flex-1 flex items-center justify-center p-2'>
                                        {checkStatus((item?.overview?.expired?.split(' ')[3])) ? 'Đang hoạt động' : 'Đã hết hạn'}
                                    </td>
                                    <td className='flex h-full flex-1 items-center justify-around border p-2'>
                                        <Button
                                            text='Sửa'
                                            bgColor='bg-green-600'
                                            textColor='text-white'
                                            onClick={() => {
                                                dispatch(actions.editData(item))
                                                setIsEdit(true)
                                            }}
                                        />
                                        <Button
                                            text='Xóa'
                                            bgColor='bg-red-600'
                                            textColor='text-white'
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>
    )
}

export default ManagePost