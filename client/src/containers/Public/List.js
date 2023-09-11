import React from 'react'
import { Button, Item } from '../../components'

const List = () => {
    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md'>
            <div className='my-3'>
                <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp:</span>
                <Button bgColor={'bg-gray-200'} text={'Mặc định'} />
                <Button bgColor={'bg-gray-200'} text={'Mới nhất'} />
            </div>
            <div>
                <Item />
                {/* <Item />
                <Item /> */}
            </div>
        </div>
    )
}

export default List