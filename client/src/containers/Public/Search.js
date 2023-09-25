import React, { useCallback, useState } from 'react'
import { Modal, SearchItem } from '../../components'
import icons from '../../ultils/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, createSearchParams } from 'react-router-dom'
import * as actions from '../../store/actions'
import { path } from '../../ultils/constant'

const { GrNext,
    BsBuilding,
    CiLocationOn,
    LiaCropSolid,
    TbReportMoney,
    BsSearch } = icons

const Search = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState([])
    const [name, setName] = useState()
    const { provinces, areas, prices, categories } = useSelector(state => state.app)
    const [queries, setQueries] = useState({})
    const [arrMinMax, setArrMinMax] = useState({})
    const [defaultText, setDefaultText] = useState('')

    const handleShowModal = (content, name, defaultText) => {
        setContent(content)
        setName(name)
        setDefaultText(defaultText)
        setIsShowModal(true)
    }

    const handleSubmit = useCallback((e, query, arrMinMax) => {
        e.stopPropagation()
        setQueries(pre => ({ ...pre, ...query }))
        setIsShowModal(false)
        arrMinMax && setArrMinMax(pre => ({ ...pre, ...arrMinMax }))
    }, [isShowModal, queries])


    const handleSearch = () => {
        const queryCodes = Object.entries(queries).filter(item => item[0].includes('Code')).filter(item => item[1])
        let queryCodesObj = {}
        queryCodes.forEach(item => {
            queryCodesObj[item[0]] = item[1]
        })
        navigate({
            pathname: path.SEARCH,
            search: createSearchParams(queryCodesObj).toString()
        })
    }

    return (
        <>
            <div className='p-[10px] w-3/5 bg-[#febb02] rounded-lg flex flex-col lg:flex-row items-center justify-around gap-2'>
                <span
                    onClick={() => handleShowModal(categories, 'category', 'Tìm tất cả')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<BsBuilding />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.category} defaultText={'Tìm tất cả'} fontWeight />
                </span>
                <span
                    onClick={() => handleShowModal(provinces, 'province', 'Toàn quốc')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<CiLocationOn />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.province} defaultText={'Toàn quốc'} />
                </span>
                <span
                    onClick={() => handleShowModal(prices, 'price', 'Chọn giá')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<TbReportMoney />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.price} defaultText={'Chọn giá'} />
                </span>
                <span
                    onClick={() => handleShowModal(areas, 'area', 'Chọn diện tích')}
                    className='w-full cursor-pointer'
                >
                    <SearchItem iconBefore={<LiaCropSolid />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text={queries.area} defaultText={'Chọn diện tích'} />
                </span>
                <button
                    type='button'
                    onClick={handleSearch}
                    className='outline-none py-2 px-4 w-full bg-secondary1 text-white text-[13.3px] rounded-md flex items-center justify-center gap-2 font-medium'
                >
                    <BsSearch />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal
                handleSubmit={handleSubmit}
                content={content}
                arrMinMax={arrMinMax}
                queries={queries}
                name={name}
                setIsShowModal={setIsShowModal}
                defaultText={defaultText}
            />}
        </>
    )
}

export default Search