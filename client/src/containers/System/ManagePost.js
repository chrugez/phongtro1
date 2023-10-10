import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { checkStatus } from '../../ultils/Common/checkStatus'

const ManagePost = () => {
    const dispatch = useDispatch()
    const { postOfCurrent } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin())
    }, [])

    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex justify-between items-center'>
                <h1 className='text-3xl font-medium '>Quản lý tin đăng </h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="">Lọc theo trạng thái</option>
                </select>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className='py-2'>
                        <th className='border py-2'>Mã tin</th>
                        <th className='border py-2'>Ảnh đại diện</th>
                        <th className='border py-2'>Tiêu đề</th>
                        <th className='border py-2'>Giá</th>
                        <th className='border py-2'>Ngày bắt đầu</th>
                        <th className='border py-2'>Ngày hết hạn</th>
                        <th className='border py-2'>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {!postOfCurrent
                        ? <tr><td >Bạn chưa có tin đăng nào.</td></tr>
                        : postOfCurrent?.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className='border text-center py-2'>{item?.overview?.code}</td>
                                    <td className='border flex items-center justify-center py-2'>
                                        <img src={JSON.parse(item?.images?.image)[0] || ''} alt="ảnh" className='w-10 h-10 object-cover rounded-md' />
                                    </td>
                                    <td className='border text-center py-2'>{item?.title}</td>
                                    <td className='border text-center py-2'>{item?.attributes?.price}</td>
                                    <td className='border text-center py-2'>{item?.overview?.created}</td>
                                    <td className='border text-center py-2'>{item?.overview?.expired}</td>
                                    <td className='border text-center py-2'>
                                        {checkStatus((item?.overview?.expired?.split(' ')[3])) ? 'Đang hoạt động' : 'Đã hết hạn'}
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default ManagePost