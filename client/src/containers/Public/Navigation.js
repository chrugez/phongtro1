import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'


const notActive = 'hover:bg-secondary2 bg-secondary1 px-4 h-full flex items-center'
const active = 'hover:bg-secondary2 bg-secondary2 px-4 h-full flex items-center'

const Navigation = ({ isAdmin }) => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])

    return (
        <div className={`w-full flex ${isAdmin ? 'justify-start' : 'items-center'} h-10 bg-secondary1 text-white`}>
            <div className='w-3/5 flex items-center h-full text-sm font-medium'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Trang chủ
                </NavLink>
                {categories?.length > 0 && categories.map(item => {
                    return (
                        <div key={item.code} className='h-full flex items-center justify-center'>
                            <NavLink
                                to={`/${formatVietnameseToString(item.value)}`}
                                className={({ isActive }) => isActive ? active : notActive}
                            >
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation