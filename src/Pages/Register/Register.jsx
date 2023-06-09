import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2'

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const confirmPassword = form.confirmPassword.value;
        const email = form.email.value;
        const password = form.password.value;
      
        // Check password requirements
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;
        if (!passwordRegex.test(password)) {
          setError(
            "Password should be at least 6 characters long, contain at least 1 capital letter, and 1 special character."
          );
          return;
        }
      
        // Check if password and confirm password match
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
      
        setError("");
        createUser(email, password)
            .then(result => {
            const createdUser = result.user;
            console.log(createdUser);

            updateUserProfile(name, photo)
                .then(() => {
                    const saveUser = { name: name, email: email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })



                })
                .catch(error => setError(error))
            
            })
            .catch(error => {
                setError(error);
            });
      };
      


    return (
        <div>
            <div className="login-box mx-auto m-12 ">
            <h2 className='text-2xl m-5 border-b border-gray-800'>Creat Account</h2>
            <form onSubmit={handleRegister}>
                <div className="user-box">
                    <input type="text" name='name' required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="email" name='email' required/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name='password' required/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name='confirmPassword' required/>
                    <label>Confirm Password</label>
                </div>
                <div className="user-box">
                    <input type="text" name='photo' required/>
                    <label>Photo URL</label>
                </div>
                

                <div className="submit-creat">
                    <div className="submit">
                        <a href=""><input className="" type="submit" value="Register" /><span></span><span></span><span></span><span></span></a>
                    </div>
                    <div className="creat-account">
                    <Link  to="/login">Already have Account..?</Link>
                    </div>
                </div>
                <p className="" ></p>
                <p className="text-red-600" >{error}</p>
            </form>

        </div>
        </div>
    );
};

export default Register;