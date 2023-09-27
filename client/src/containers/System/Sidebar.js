import React from 'react'
import noAvatar from '../../assets/no-avatar.png'
import { useSelector, useDispatch } from 'react-redux'
import menuSidebar from '../../ultils/menuSidebar'
import { NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'
import icons from '../../ultils/icons'

const { MdOutlineLogout } = icons

const activeStyle = 'py-2 flex items-center hover:bg-gray-200 rounded-md font-bold bg-gray-200 gap-2'
const notActiveStyle = 'py-2 flex items-center hover:bg-gray-200 rounded-md gap-2 cursor-pointer'

const Sidebar = () => {
    const { currentData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <div className='w-[250px] flex-none p-4 flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <img src={noAvatar} alt="avatar" className='w-12 h-12 rounded-full object-cover border-2 border-white' />
                    <div className=' flex flex-col justify-center'>
                        <span className='font-semibold'>{currentData?.name}</span>
                        <small>{currentData?.phone}</small>
                    </div>
                </div>
                <span>Mã thành viên: <span className='font-medium text-sm'>{currentData?.id?.match(/\d/g)?.slice(0, 6)}</span></span>
            </div>
            <div>
                {menuSidebar?.map(item => {
                    return (
                        <NavLink
                            to={item?.path}
                            key={item.id}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                        >
                            {item?.icon}
                            {item.text}
                        </NavLink>
                    )
                })}
                <span
                    onClick={() => {
                        dispatch(actions.logout())
                    }}
                    className={`${notActiveStyle} `}
                >
                    <MdOutlineLogout size={24} />
                    Thoát
                </span>
            </div>
        </div>
    )
}

export default Sidebar