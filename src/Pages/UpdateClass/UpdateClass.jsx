import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {

    const { user } = useAuth();
    const classitem = useLoaderData();
    const { cName, cImage, iName, email, seat, price, _id } = classitem;

    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const cName = form.cName.value;
        const cImage = form.cImage.value;
        const seat = form.seat.value;
        const price = form.price.value;
        
        const updates = {
            cName : cName,
            cImage : cImage,
            seat : seat,
            price : price,  
        }


        fetch(`http://localhost:5000/myclasses/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged == true) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className='my-6'>
                <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Update This Class</p>
                <div className="w-full mt-6 mx-auto border border-orange-300 rounded-lg p-12 shadow-xl ">
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                        <label className="text-lg font-semibold">Class Name:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="cName" id="cName" defaultValue={cName}  required />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Class Image:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="cImage" id="cImage" defaultValue={cImage} />
                        </div>
                        
                        <div>
                        <label className="text-lg font-semibold">Instractor:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="iName" id="iName"    title='readonly'  readOnly defaultValue={iName}/>
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Emial:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="email" id="email"  title='readonly'  readOnly  defaultValue={email}/>
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Seat:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="seat" id="seat"  required defaultValue={seat}/>
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Price:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="price" id="price" defaultValue={price}  required />
                        </div>

                    </div>

                    <div className='text-center'>
                    <button className="btn btn-outline btn-warning mt-4 border-orange-300 text-orange-300" type="submit" name="submit" >Update</button>
                    </div>

                </form>
                </div>
            </div>
    );
};

export default UpdateClass;