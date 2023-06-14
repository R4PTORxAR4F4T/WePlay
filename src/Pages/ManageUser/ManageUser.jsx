import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from "sweetalert2";

const ManageUser = () => {

    const {user, loading} = useAuth();
    const [alluser, setAlluser] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/alluser`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlluser(data))
            
    }, [url,loading]);

    const handleMakeAdmin = user =>{
        fetch(`https://assignment-12-server-jet-iota.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstractor = user =>{
        fetch(`https://assignment-12-server-jet-iota.vercel.app/users/instractor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instractor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-5/6'>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Manage User | Total user : </p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>admin</th>
                            <th>instractor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        alluser &&
                        alluser.map((user, index) => (
                            <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs btn-outline" disabled={user.role === 'admin'}>
                                Admin
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleMakeInstractor(user)} className="btn btn-ghost btn-xs btn-outline" disabled={user.role === 'instractor'}>
                                Instructor
                                </button>
                            </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;