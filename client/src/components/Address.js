import React, { memo, useEffect, useState } from 'react'
import { Select, InputReadOnly } from '../components'
import { apiGetPublicProvinces, apiGetPublicDistrict } from '../services'

const Address = ({ payload, setPayload, invalidFields, setInvalidFields }) => {

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
    const [reset, setReset] = useState(false)

    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces()
            if (response.status === 200) {
                setProvinces(response?.data?.results)
            }
            // console.log(response);
        }
        fetchPublicProvince()
    }, [])

    useEffect(() => {
        setDistrict("")
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province)
            if (response.status === 200) {
                setDistricts(response?.data?.results)
            }
            // console.log(response);
        }
        province && fetchPublicDistrict(province)
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])

    useEffect(() => {
        setPayload(prev => ({
            ...prev,
            address: `${district ? `${districts.find(item => item.district_id === district)?.district_name}, ` : ''}${province ? provinces.find(item => item.province_id === province)?.province_name : ''}`,
            province: `${province ? provinces.find(item => item.province_id === province)?.province_name : ''}`
        }))
    }, [province, district])

    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Địa chỉ cho thuê</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <Select
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        type='province'
                        value={province}
                        setValue={setProvince}
                        options={provinces}
                        label='Tỉnh/TP'
                    />
                    <Select
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        reset={reset}
                        type='district'
                        value={district}
                        setValue={setDistrict}
                        options={districts}
                        label='Quận/Huyện'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <InputReadOnly label='Địa chỉ chính xác' value={`${district ? `${districts.find(item => item.district_id === district)?.district_name}, ` : ''}${province ? provinces.find(item => item.province_id === province)?.province_name : ''}`} />
                </div>
            </div>
        </div>
    )
}

export default memo(Address)