import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsLimit } from '../../store/actions'
import { Slider, BoxInfo, RelatedPost } from '../../components'
import icons from '../../ultils/icons'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { path } from '../../ultils/constant'

const { MdLocationPin,
    LiaCropSolid,
    TbReportMoney,
    MdOutlineWatchLater,
    GoHash } = icons

const DetailPost = () => {
    const navigate = useNavigate()
    const { postId } = useParams()
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        postId && dispatch(getPostsLimit({ id: postId }))
    }, [postId])

    const handleFilterLabel = () => {
        const titleSearch = `Tìm kiếm tin đăng theo chuyên mục ${posts[0]?.labelData?.value}`
        navigate({
            pathname: `/${path.SEARCH}`,
            search: createSearchParams({ labelCode: posts[0]?.labelData?.code }).toString()
        }, { state: { titleSearch } })
    }

    return (
        <div className='w-full flex gap-4'>
            <div className='w-[70%] flex flex-col'>
                <Slider images={posts && posts?.length > 0 && JSON.parse(posts[0].images.image)} />
                <div className='bg-white rounded-md shadow-sm p-4'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-xl font-bold text-red-600'>{posts[0]?.title}</h2>
                        <div className='flex items-center gap-2'>
                            <span>Chuyên mục: </span>
                            <span
                                className='text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer'
                                onClick={handleFilterLabel}
                            >
                                {posts[0]?.labelData?.value}
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdLocationPin color='#2563EB' />
                            <span>{posts[0]?.address}</span>
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                            <span className='flex items-center gap-1'>
                                <TbReportMoney />
                                <span className='font-semibold text-lg text-green-600'>{posts[0]?.attributes?.price}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <LiaCropSolid />
                                <span>{posts[0]?.attributes?.acreage}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <MdOutlineWatchLater />
                                <span>{posts[0]?.attributes?.published}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <GoHash />
                                <span>{posts[0]?.attributes?.hashtag}</span>
                            </span>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h3 className='font-semibold text-xl my-4'>Thông tin mô tả</h3>
                        <div className='flex flex-col gap-2'>
                            {posts[0]?.description && JSON.parse(posts[0]?.description)?.map((item, index) => {
                                return (
                                    <span key={index}>{item}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl my-4'>Đặc điểm tin đăng</h3>
                        <table className='w-full'>
                            <tbody>
                                <tr className='w-full'>
                                    <td className='p-2'>Mã tin</td>
                                    <td className='p-2'>{posts[0]?.overview?.code}</td>
                                </tr>
                                <tr className='w-full bg-gray-200'>
                                    <td className='p-2'>Khu vực</td>
                                    <td className='p-2'>{posts[0]?.overview?.area}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Loại tin giao</td>
                                    <td className='p-2'>{posts[0]?.overview?.type}</td>
                                </tr>
                                <tr className='w-full bg-gray-200'>
                                    <td className='p-2'>Đối tượng</td>
                                    <td className='p-2'>{posts[0]?.overview?.target}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Gói tin</td>
                                    <td className='p-2'>{posts[0]?.overview?.bonus}</td>
                                </tr>
                                <tr className='w-full bg-gray-200'>
                                    <td className='p-2'>Ngày đăng</td>
                                    <td className='p-2'>{posts[0]?.overview?.created}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Ngày hết hạn</td>
                                    <td className='p-2'>{posts[0]?.overview?.expired}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <h3 className='font-semibold text-xl my-4'>Thông tin liên hệ</h3>
                        <table className='w-full'>
                            <tbody>
                                <tr className='w-full'>
                                    <td className='p-2'>Liên hệ</td>
                                    <td className='p-2'>{posts[0]?.user?.name}</td>
                                </tr>
                                <tr className='w-full bg-gray-200'>
                                    <td className='p-2'>Điện thoại</td>
                                    <td className='p-2'>{posts[0]?.user?.phone}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Zalo</td>
                                    <td className='p-2'>{posts[0]?.user?.zalo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='w-[30%] flex flex-col gap-4'>
                <BoxInfo userData={posts[0]?.user} />
                <RelatedPost />
            </div>
        </div>
    )
}

export default DetailPost