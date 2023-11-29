import React, { useEffect, useState } from 'react'
import { Button, Item } from '../../components'
import { getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const List = ({ categoryCode }) => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const [sort, setSort] = useState(0)
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry)
        }
        let searchParamsObject = {}
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] }
            }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        if (sort === 1) searchParamsObject.order = ['createdAt', 'DESC']
        dispatch(getPostsLimit(searchParamsObject))
    }, [searchParams, categoryCode, sort])

    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md px-4'>
            <div className='my-3'>
                <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp:</span>
                <span
                    className={`bg-gray-200 p-2 cursor-pointer rounded-md hover:underline ${sort === 0 && 'text-red-500'}`}
                    onClick={() => setSort(0)}
                >
                    Mặc định
                </span>
                <span
                    className={`bg-gray-200 p-2 cursor-pointer rounded-md hover:underline ${sort === 1 && 'text-red-500'}`}
                    onClick={() => setSort(1)}
                >
                    Mới nhất
                </span>
            </div>
            <div>
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attributes={item?.attributes}
                            description={JSON.parse(item?.description)}
                            images={JSON.parse(item?.images?.image)}
                            star={+item?.star}
                            title={item?.title}
                            user={item?.user}
                            id={item?.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List