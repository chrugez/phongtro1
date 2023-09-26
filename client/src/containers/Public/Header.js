import React, { useCallback, useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo-removebg.png'
import { Button } from '../../components'
import icons from '../../ultils/icons'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import menuManage from '../../ultils/menuManage'

const { AiOutlinePlusCircle, MdOutlineLogout } = icons

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const headerRef = useRef()
    const { isLoggedIn } = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user)
    const [isShowMenu, setIsShowMenu] = useState(false)

    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [searchParams.get('page')])

    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])

    return (
        <div ref={headerRef} className='w-3/5'>
            <div className='w-full flex items-center justify-between '>
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt="logo"
                        className='w-[240px] h-[70px] object-contain'
                    />
                </Link>
                <div className='flex items-center gap-1'>
                    {!isLoggedIn && <div className='flex items-center gap-1'>
                        <span className='text-sm hover:underline cursor-pointer'>Phongtro123.com xin chào!!!</span>
                        <Button
                            text={'Đăng nhập'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            text={'Đăng kí'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                    {isLoggedIn && <div className='flex items-center gap-1 relative'>
                        <span className='text-sm hover:underline cursor-pointer'>{currentData.name}</span>
                        <Button
                            text={'Quản lý tài khoản'}
                            textColor='text-white'
                            bgColor='bg-blue-700'
                            px='px-6'
                            onClick={() => setIsShowMenu(prev => !prev)}
                        />
                        {isShowMenu && <div className='absolute min-w-200 top-full right-0 bg-white shadow-md p-4 rounded-md flex flex-col'>
                            {menuManage?.map(item => {
                                return (
                                    <Link
                                        to={item?.path}
                                        key={item.id}
                                        className='border-b text-blue-600 py-2 flex items-center gap-1 border-gray-200 hover:text-orange-500'
                                    >
                                        {item?.icon}
                                        {item.text}
                                    </Link>
                                )
                            })}
                            <span
                                onClick={() => {
                                    dispatch(actions.logout())
                                    setIsShowMenu(false)
                                }}
                                className='text-blue-600 py-2 cursor-pointer flex gap-1 items-center hover:text-orange-500'
                            >
                                <MdOutlineLogout size={24} />
                                Đăng Xuất
                            </span>
                        </div>}
                    </div>}
                    <Button
                        text={'Đăng tin mới'}
                        textColor='text-white'
                        bgColor='bg-secondary2'
                        icAfter={<AiOutlinePlusCircle />} />
                </div>
            </div>
        </div>
    )
}

export default Header