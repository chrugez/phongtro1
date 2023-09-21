import React, { useEffect, useState } from 'react'
import { Province, ItemSidebar, RelatedPost } from '../../components'
import { List, Pagination } from './index'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'

const RentalApartment = () => {

    const [params] = useSearchParams()
    const { prices, areas, categories } = useSelector(state => state.app)
    const location = useLocation()
    const [categoryCode, setCategoryCode] = useState('none')
    const [categoryCurrent, setCategoryCurrent] = useState({})

    useEffect(() => {
        const category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === location.pathname)
        setCategoryCurrent(category)
        if (category) {
            setCategoryCode(category.code)
        }
    }, [location])

    return (
        <div className=' w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>
                    {categoryCurrent?.header}
                </h1>
                <p className='text-sm text-gray-700'>{categoryCurrent?.subheader}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List categoryCode={categoryCode} />
                    <Pagination page={params.get('page')} />
                </div>
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='areaCode' content={areas} title='Xem theo diện tích' />
                    <RelatedPost />
                </div>
            </div>
        </div>
    )
}

export default RentalApartment