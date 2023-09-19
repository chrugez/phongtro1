import React, { useEffect } from 'react'
import { Button, Item } from '../../components'
import { getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const List = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry)
        }
        let searchParamsObject = {}
        params?.map(i =>
            searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] }
        )
        dispatch(getPostsLimit(searchParamsObject))
    }, [searchParams])

    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md px-4'>
            <div className='my-3'>
                <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp:</span>
                <Button bgColor={'bg-gray-200'} text={'Mặc định'} />
                <Button bgColor={'bg-gray-200'} text={'Mới nhất'} />
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