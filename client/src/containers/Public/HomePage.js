import React, { useEffect } from 'react'
import { text } from '../../ultils/constant'
import { Province, ItemSidebar } from '../../components'
import { List, Pagination } from './index'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const HomePage = () => {
    const [params] = useSearchParams()
    const dispatch = useDispatch()
    const { categories, prices, areas } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAreas())
    }, [])

    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>
                    {text.HOME_TITLE}
                </h1>
                <p className='text-sm text-gray-700'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List page={params.get('page')} />
                    <Pagination page={params.get('page')} />
                    <div className='h-[500px]'></div>
                </div>
                <div className='w-[30%] border border-green-600 flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar content={categories} title='Danh sách cho thuê' />
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} content={areas} title='Xem theo diện tích' />
                </div>
            </div>
        </div>
    )
}

export default HomePage