import React,{useState} from 'react';
import useAuth from './useAuth';
import { useEffect } from "react";


const useRole = () => {

    const {user, loading} = useAuth();
    const [role, setRole] = useState(null);

    const url = `https://assignment-12-server-jet-iota.vercel.app/user/${user?.email}`;
    // console.log(url);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
               
                setRole(data.role);
            })
    }, [url,loading]);
    return role;
};

export default useRole;