import React, { useCallback, useState } from 'react'
import { Modal, SearchItem } from '../../components'
import icons from '../../ultils/icons'
import { useSelector } from 'react-redux'
import { getCodeArea, getCodePrice } from '../../ultils/Common/getCodes'

const { GrNext,
    BsBuilding,
    CiLocationOn,
    LiaCropSolid,
    TbReportMoney,
    BsSearch } = icons

const Search = () => {

    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState([])
    const [name, setName] = useState()
    const { provinces, areas, prices, categories } = useSelector(state => state.app)
    const [queries, setQueries] = useState({})
    console.log(getCodeArea(areas));
    console.log(getCodePrice(prices));

    const handleShowModal = (content, name) => {
        setContent(content)
        setIsShowModal(true)
        setName(name)
    }

    const handleSubmit = useCallback((e, query) => {
        e.stopPropagation()
        setQueries(pre => ({ ...pre, ...query }))
        setIsShowModal(false)
    }, [isShowModal, queries])
    console.log(queries);

    return (
        <>
            <div className='p-[10px] w-3/5 bg-[#febb02] rounded-lg flex flex-col lg:flex-row items-center justify-around gap-2'>
                <span
                    onClick={() => handleShowModal(categories, 'category')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<BsBuilding />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.category} defaultText={'Phòng trọ, nhà trọ'} fontWeight />
                </span>
                <span
                    onClick={() => handleShowModal(provinces, 'province')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<CiLocationOn />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.province} defaultText={'Toàn quốc'} />
                </span>
                <span
                    onClick={() => handleShowModal(prices, 'price')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<TbReportMoney />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.price} defaultText={'Chọn giá'} />
                </span>
                <span
                    onClick={() => handleShowModal(areas, 'area')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<LiaCropSolid />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.area} defaultText={'Chọn diện tích'} />
                </span>
                <button
                    type='button'
                    className='outline-none py-2 px-4 w-full bg-secondary1 text-white text-[13.3px] rounded-md flex items-center justify-center gap-2 font-medium'
                >
                    <BsSearch />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal handleSubmit={handleSubmit} content={content} queries={queries} name={name} setIsShowModal={setIsShowModal} />}
        </>
    )
}

export default Search