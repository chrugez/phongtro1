import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { apiGetCategories } from '../../services/category'
import { formatVietnameseToString } from '../../ultils/constant'


const notActive = 'hover:bg-secondary2 bg-secondary1 px-4 h-full flex items-center'
const active = 'hover:bg-secondary2 bg-secondary2 px-4 h-full flex items-center'

const Navigation = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fecthCategories = async () => {
            const response = await apiGetCategories()
            if (response?.data.err === 0) {
                setCategories(response.data.response)
            }
        }
        fecthCategories()
    }, [])

    return (
        <div className='w-full flex items-center justify-center h-10 bg-secondary1 text-white'>
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
                                to={`${formatVietnameseToString(item.value)}`}
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