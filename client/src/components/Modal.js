import React, { memo, useState, useEffect } from 'react'
import icons from '../ultils/icons'

const { GrLinkPrevious } = icons

const Modal = ({ setIsShowModal, content, name }) => {

    const [percent1, setPercent1] = useState(0)
    const [percent2, setPercent2] = useState(100)

    useEffect(() => {
        const activedTrackEl = document.getElementById('track-active')
        if (percent2 <= percent1) {
            activedTrackEl.style.left = `${percent2}%`
            activedTrackEl.style.right = `${100 - percent1}%`
        } else {
            activedTrackEl.style.left = `${percent1}%`
            activedTrackEl.style.right = `${100 - percent2}%`
        }
    }, [percent1, percent2])

    const handleClickStack = (e) => {
        const stackEl = document.getElementById('track')
        const stackRect = stackEl.getBoundingClientRect()
        let percent = Math.round((e.clientX - stackRect.left) * 100 / stackRect.width)
        if (Math.abs(percent - percent1) <= (Math.abs(percent - percent2))) {
            setPercent1(percent)
        } else {
            setPercent2(percent)
        }
    }

    return (
        <div
            onClick={() => {
                setIsShowModal(false)
            }}
            className='fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex items-center justify-center'
        >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    setIsShowModal(true)
                }}
                className='w-1/3 bg-white rounded-md'
            >
                <div className='h-[45px] flex items-center px-4 border-b border-gray-200'>
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsShowModal(false)
                        }}
                        className='cursor-pointer'
                    >
                        <GrLinkPrevious size={24} />
                    </span>
                </div>
                {(name === 'category' || name === 'province') && <div className='p-4 flex flex-col'>
                    {content?.map(item => {
                        return (
                            <span key={item.code} className='py-2 flex gap-2 items-center border-b border-gray-300'>
                                <input type="radio" name={name} id={item.code} value={item.code} />
                                <label htmlFor={item.code}>{item.value}</label>
                            </span>
                        )
                    })}
                </div>}
                {(name === 'price' || name === 'area') && <div className='p-12'>
                    <div className='flex flex-col items-center justify-center relative'>
                        <div onClick={handleClickStack} id='track' className='slider-track h-[5px] bg-gray-300 absolute top-0 bottom-0 w-full rounded-full'></div>
                        <div onClick={handleClickStack} id='track-active' className='slider-track-active h-[5px] bg-orange-600 absolute top-0 bottom-0 rounded-full'></div>
                        <input
                            max='100'
                            min='0'
                            step='5'
                            type="range"
                            value={percent1}
                            className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                            onChange={(e) => setPercent1(+e.target.value)} />
                        <input
                            max='100'
                            min='0'
                            step='5'
                            type="range"
                            value={percent2}
                            className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                            onChange={(e) => setPercent2(+e.target.value)} />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default memo(Modal)