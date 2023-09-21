import React, { memo } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const notActive = 'w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300 rounded-md'
const active = 'w-[46px] h-[48px] flex justify-center items-center bg-secondary2 hover:opacity-90 rounded-md cursor-pointer text-white'

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {

    const navigate = useNavigate()
    const [paramsSearch] = useSearchParams()
    let entries = paramsSearch.entries()
    const location = useLocation()

    const append = (entries) => {
        let params = []
        paramsSearch.append('page', +text)
        for (let entry of entries) {
            params.push(entry)
        }
        console.log(params);
        let a = {}
        params?.map(i =>
            a = { ...a, [i[0]]: i[1] }
        )
        return a
    }

    const handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text)
            navigate({
                pathname: location.pathname,
                search: createSearchParams(append(entries)).toString()
            })
        }
    }

    return (
        <div
            className={+text === +currentPage ? active : `${notActive} ${text === '...' ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    )
}

export default memo(PageNumber)