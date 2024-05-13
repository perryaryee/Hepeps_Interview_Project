import React, { useEffect, useState } from 'react';

import {
    useDeleteDataMutation,
    useFetchDataQuery,
    usePostDataMutation,
    usePutDataMutation,
} from '../Redux/Api/apiSlice';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MemberCards from '../Components/MemberCards';
import { Modal } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { Close_Modal, Show_Modal, selectModal } from '../Redux/Slices/ModalSlice';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector(selectModal)


    const { data, error, isLoading, refetch } = useFetchDataQuery();
    const [postData, { isLoading: isLoadingButton }] = usePostDataMutation();
    const [deleteData] = useDeleteDataMutation();
    const [putData] = usePutDataMutation();


    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [status, setstatus] = useState("");
    const [location, setlocation] = useState("");



    const handlePost = () => {
        const newData = {
            firstName,
            lastName,
            status: status,
            location: location
        };
        postData(newData).unwrap().then(() => {
            refetch();
        });
    };


    const handleDelete = (id) => {
        deleteData(id).unwrap().then(() => {
            refetch()
        });
    };

    const handleUpdate = (id) => {
        const updatedData = {
            firstName,
            lastName,
            status: status,
            location: location

        }
        putData({ id, data: updatedData }).unwrap().then(() => {
            refetch();
        });
    };


    return (
        <>
            <Modal footer={null} title="Add Member" onCancel={() => {
                dispatch(Close_Modal());
            }} open={modal}>
                <div className=' space-y-4 pt-4'>
                    <TextField fullWidth value={firstName} onChange={(e) => {
                        setfirstName(e.target.value);
                    }} />
                    <TextField fullWidth value={lastName} onChange={(e) => {
                        setlastName(e.target.value);
                    }} />
                    <TextField fullWidth value={status} onChange={(e) => {
                        setstatus(e.target.value);
                    }} />
                    <TextField fullWidth value={location} onChange={(e) => {
                        setlocation(e.target.value);
                    }} />
                </div>
                <button className=' bg-[#003551] text-white mt-4 flex justify-end' onClick={handlePost}>{isLoadingButton ? 'Posting...' : 'Add Member'}</button>
            </Modal>
            <div>
                <div className=' flex items-center justify-between bg-white shadow-md py-4 px-6'>
                    <h1 className=' font-semibold text-3xl'>Members</h1>
                    <button onClick={() => {
                        dispatch(Show_Modal());
                    }} className=' bg-[#003551]  text-white py-3 px-6 shadow-md rounded-[5px]'>Add Member</button>
                </div>
                <>
                    {isLoading ? <div>Loading...</div> :
                        <div className=' grid grid-cols-4 gap-3'>
                            {data.map((list) => (
                                <MemberCards
                                    // onClickDelete={() => handleDelete(list.tblid)}
                                    onClick={() => {
                                        navigate("/details", {
                                            state: {
                                                id: list.id
                                            }
                                        })

                                    }}
                                    key={list.id} firstName={list.firstName} lastName={list.
                                        lastName
                                    } />
                            ))}
                        </div>
                    }
                </>
            </div>
        </>
    );
}

export default Home;
