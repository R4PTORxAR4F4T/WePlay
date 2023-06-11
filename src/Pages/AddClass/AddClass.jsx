import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'

    
    const handleAddClass = event =>{
        event.preventDefault();

        const form = event.target;
        const cName = form.cName.value;
        const cImage = form.cImage.value;
        const iName = form.iName.value;
        const email = form.email.value;
        const seat = form.seat.value;
        const price = form.price.value;
        const status = "pending";
        const enrollStudent= "";
        const feedback= "";

        const adding ={
            cName : cName,
            cImage : cImage,
            iName : iName,
            email : email,
            seat : seat,
            price : price,
            status : status,
            enrollStudent : enrollStudent,
            feedback : feedback
        }

        fetch('http://localhost:5000/allclasses',{
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(adding)
        })
        .then(res => res.json())
    .then(data => {
        console.log(data);
        form.reset();
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Class added to database',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    })

    }



const AddClass = () => {
    const { user } = useAuth();

    return (
        <div className='my-6'>
                <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Add Class</p>
                <div className="w-full mt-6 mx-auto border border-orange-300 rounded-lg p-12 shadow-xl ">
                <form onSubmit={handleAddClass}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                        <label className="text-lg font-semibold">Class Name:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="cName" id="cName"  required />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Class Image:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="cImage" id="cImage" />
                        </div>
                        
                        <div>
                        <label className="text-lg font-semibold">Instractor:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="iName" id="iName"   defaultValue={user.displayName} title='readonly'  readOnly />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Emial:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="email" id="email"  defaultValue={user.email} title='readonly'  readOnly  />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Seat:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="seat" id="seat"  required />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Price:</label><br />
                        <input className="w-full border border-orange-300 px-4 py-2 rounded-lg" type="text" name="price" id="price"  required />
                        </div>

                    </div>

                    <div className='text-center'>
                    <button className="btn btn-outline btn-warning mt-4 border-orange-300 text-orange-300" type="submit" name="submit" >Add Class</button>
                    </div>

                </form>
                </div>
            </div>
    );
};

export default AddClass;