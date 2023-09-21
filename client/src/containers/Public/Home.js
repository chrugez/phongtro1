import React, { useEffect } from 'react'
import { Header, Navigation, Search } from './'
import { Outlet } from 'react-router-dom'
import { Intro, Contact } from '../../components'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAreas())
    }, [])

    return (
        <div className='w-full flex flex-col gap-6 items-center h-full'>
            <Header />
            <Navigation />
            <Search />
            <div className='w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3'>
                <Outlet />
            </div>
            <Intro />
            <Contact />
            <div className='h-[500px]'></div>
        </div>
    )
}

export default Home