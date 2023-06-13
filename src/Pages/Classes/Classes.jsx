import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {

    const {user, loading} = useAuth();
    const [classes, setClasses] = useState();
    const navigate = useNavigate();
    const location = useLocation();


    const url = `http://localhost:5000/approveclasses`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClasses(data))
            
    }, [url,loading]);

    const handleAddToCart = classitem => {

        const { cImage, cName, email, enrollStudent, feedback, iName, price, seat, _id } = classitem;

        if(user && user.email){
            const cartItem = {
                uEmail : user.email,
                cImage : cImage,
                cName : cName,
                email : email,
                enrollStudent : enrollStudent,
                feedback : feedback,
                iName : iName,
                price : price,
                seat : seat,
                _id : _id     
            }
            
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    
    return (
        <div className='lg:w-4/6 mx-auto'>
            <Header></Header>
            <div className='my-10'>
                <p className='text-4xl text-center border-b pb-4 border-white text-orange-300 my-10'>Our Provided Classes</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes && classes.map(classitem =>

                    <div key={`${classitem._id}`} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={classitem.cImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classitem.cName}</h2>
                            <p>Inastractor : {classitem.iName}</p>
                            <div className="card-actions justify-end">
                            <button onClick={() => handleAddToCart(classitem)} className="btn btn-primary">Add to Selected</button>
                            </div>
                        </div>
                    </div>
                )}
                </div>  
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Classes;