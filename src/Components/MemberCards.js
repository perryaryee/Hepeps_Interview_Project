import { IconButton } from '@mui/material';
import React from 'react';


const MemberCards = ({ firstName, onClick, onClickDelete, lastName, digitalAddress,
    maritalStatus, occupation,
    phoneNumber, place_of_work, location }) => {
    return (
        <div onClick={onClick} className=' bg-white shadow-md rounded-[4px] mt-5 cursor-pointer'>
            <div className=' px-3 py-4'>
                <h1 className=' text-[#000000]'>{firstName}</h1>
                <h1 className=' text-[#000000]'>{lastName}</h1>
                <h1 className=' text-[#000000]'>{digitalAddress}</h1>
                <h1 className=' text-[#000000]'>{
                    maritalStatus}</h1>
                <h1 className=' text-[#000000]'>{occupation}</h1>
                <h1 className=' text-[#000000]'>{
                    phoneNumber}</h1>
                <h1 className=' text-[#000000]'>{place_of_work}</h1>
                <h1 className=' text-[#000000]'>{location}</h1>
            </div>
            <div className=' flex items-center justify-between'>
                

            </div>
        </div>
    )
}

export default MemberCards;