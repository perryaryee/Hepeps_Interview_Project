import React from 'react'
import { useLocation } from 'react-router-dom';
import { useFetchDataByIdQuery } from '../Redux/Api/apiSlice';

const Details = () => {
    const location = useLocation();
    const { data: singleData, error: singleDataError, isLoading: singleDataLoading } = useFetchDataByIdQuery(location.state.id);

    return (
        <div>
            <div className=' flex items-center justify-between bg-white shadow-md py-4 px-6'>
                <h1 className=' font-semibold text-3xl'>Companies</h1>
                <button className=' bg-[#003551]  text-white py-3 px-6 shadow-md rounded-[5px]'>Keep On</button>
            </div>
            {singleDataLoading ? <h1>Looding..</h1> :
                <div>
                    <h1>{singleData?.firstName}</h1>
                    <h1>{singleData?.lastName}</h1>
                </div>
            }
        </div>
    )
}

export default Details;