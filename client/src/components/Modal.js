import React, { memo, useState, useEffect } from 'react'
import icons from '../ultils/icons'

const { GrLinkPrevious } = icons

const Modal = ({ setIsShowModal, content, name }) => {

    const [percent1, setPercent1] = useState(0)
    const [percent2, setPercent2] = useState(100)
    const [activeEl, setActiveEl] = useState('')

    useEffect(() => {
        const activedTrackEl = document.getElementById('track-active')
        if (activedTrackEl) {
            if (percent2 <= percent1) {
                activedTrackEl.style.left = `${percent2}%`
                activedTrackEl.style.right = `${100 - percent1}%`
            } else {
                activedTrackEl.style.left = `${percent1}%`
                activedTrackEl.style.right = `${100 - percent2}%`
            }
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

    const convert100to15 = percent => Math.ceil(Math.round((percent * 1.5) / 5) * 5) / 10
    const convert15to100 = percent => Math.floor((percent / 15) * 100)
    const getNumbers = string => string.split(' ').map(item => +item).filter(item => !item === false)

    const handlePrice = (code, value) => {
        setActiveEl(code)
        let arrMaxMin = getNumbers(value)
        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPercent1(0)
                setPercent2(convert15to100(1))
            }
            if (arrMaxMin[0] === 15) {
                setPercent1(100)
                setPercent2(100)
            }
        }
        if (arrMaxMin.length === 2) {
            setPercent1(convert15to100(arrMaxMin[0]))
            setPercent2(convert15to100(arrMaxMin[1]))
        }
    }
    const handleSubmit = () => {
        console.log('start', convert100to15(percent1));
        console.log('end', convert100to15(percent2));
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
                className='w-3/5 bg-white rounded-md'
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
                            <span key={item?.code} className='py-2 flex gap-2 items-center border-b border-gray-300'>
                                <input type="radio" name={name} id={item?.code} value={item?.code} />
                                <label htmlFor={item?.code}>{item?.value}</label>
                            </span>
                        )
                    })}
                </div>}
                {(name === 'price' || name === 'area') && <div className='p-12 py-20'>
                    <div className='flex flex-col items-center justify-center relative'>
                        <div className='absolute z-30 top-[-48px] font-bold text-xl text-orange-600'>
                            {`Từ ${percent1 <= percent2 ? convert100to15(percent1) : convert100to15(percent2)} - ${percent2 >= percent1 ? convert100to15(percent2) : convert100to15(percent1)} triệu`}
                        </div>
                        <div onClick={handleClickStack} id='track' className='slider-track h-[5px] bg-gray-300 absolute top-0 bottom-0 w-full rounded-full'></div>
                        <div onClick={handleClickStack} id='track-active' className='slider-track-active h-[5px] bg-orange-600 absolute top-0 bottom-0 rounded-full'></div>
                        <input
                            max='100'
                            min='0'
                            step='1'
                            type="range"
                            value={percent1}
                            className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                            onChange={(e) => {
                                setPercent1(+e.target.value)
                                activeEl && setActiveEl(' ')
                            }} />
                        <input
                            max='100'
                            min='0'
                            step='1'
                            type="range"
                            value={percent2}
                            className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                            onChange={(e) => {
                                setPercent2(+e.target.value)
                                activeEl && setActiveEl(' ')
                            }} />
                        <div className='absolute z-30 top-6 left-0 right-0 flex justify-between items-center'>
                            <span
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setPercent1(0)
                                }}
                                className='cursor-pointer'>
                                0
                            </span>
                            <span
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setPercent2(100)
                                }}
                                className='mr-[-15px] cursor-pointer'>
                                15 triệu +
                            </span>
                        </div>
                    </div>
                    <div className='mt-24'>
                        <h4 className='font-medium mb-4'>Chọn nhanh:</h4>
                        <div className='flex gap-2 items-center flex-wrap w-full'>
                            {content?.map(item => {
                                return (
                                    <span
                                        key={item.code}
                                        onClick={() => handlePrice(item.code, item.value)}
                                        className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer ${item.code === activeEl ? 'bg-secondary1 text-white' : ''}`}
                                    >
                                        {item.value}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>}
                {(name === 'price' || name === 'area') && <button
                    type='button'
                    className='w-full bg-orange-400 py-2 font-medium rounded-b-md uppercase'
                    onClick={handleSubmit}
                >
                    Áp dụng
                </button>}
            </div>
        </div>
    )
}

export default memo(Modal)