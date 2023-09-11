import React, { memo } from 'react'
import { ProvinceBtn } from './index'
import { location } from '../ultils/constant'

const Province = () => {
    return (
        <div>
            <div className='flex items-center gap-5 justify-center py-5'>
                {location.map(item => {
                    return (
                        <ProvinceBtn
                            key={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default memo(Province)