import React from 'react'
import { Navigation } from '../Public'

const Header = () => {
    return (
        <div className='w-full flex flex-none h-10'>
            <div className='flex items-center justify-center font-bold bg-secondary1 text-white w-[250px] flex-none'>
                Phongtro123.com
            </div>
            <div className='flex-auto'>
                <Navigation isAdmin={true} />
            </div>
        </div>
    )
}

export default Header