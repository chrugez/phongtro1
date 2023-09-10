import React from 'react'
import { SearchItem } from '../../components'
import icons from '../../ultils/icons'

const { GrNext,
    BsBuilding,
    CiLocationOn,
    LiaCropSolid,
    TbReportMoney,
    BsSearch } = icons

const Search = () => {
    return (
        <div className='p-[10px] bg-[#febb02] rounded-lg flex flex-col lg:flex-row items-center justify-around gap-2'>
            <SearchItem iconBefore={<BsBuilding />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text='Phòng trọ, nhà trọ' fontWeight />
            <SearchItem iconBefore={<CiLocationOn />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text='Toàn quốc' />
            <SearchItem iconBefore={<TbReportMoney />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text='Chọn giá' />
            <SearchItem iconBefore={<LiaCropSolid />} iconAfter={<GrNext color='rgb(156, 163, 175)' />} text='Chọn diện tích' />
            <button
                type='button'
                className='outline-none py-2 px-4 w-full bg-secondary1 text-white text-[13.3px] rounded-md flex items-center justify-center gap-2 font-medium'
            >
                <BsSearch />
                Tìm kiếm
            </button>
        </div>
    )
}

export default Search