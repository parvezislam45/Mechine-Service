import React, { useState } from 'react';
import '../SignUp/Sign.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [setPhones] = useState('')
    const [error, setError] = useState('')
    const [signInWithGoogle, loading, errors] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const googleSignIn = () => {
        signInWithGoogle()
        navigate('/home')
    }
    const handaleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirm = e => {
        setConfirmPassword(e.target.value)
    }
    const handPhone = event => {
        setPhones(event.target.value)
    }
    console.log(email, password, confirmPassword);
    const createNewUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        navigate('/home')
    }
    const navigateLogin = () => {
        navigate = "/login"
    }
    if (errors) {

        return (
            <p>Error: {error.message}</p>
        );

    }
    if (loading) {
        return (
            <p>Looding......</p>
        )
    }
    if (user) {

        return (
            <div>
                <p>Signed In User: {user?.displayName}</p>
            </div>
        );
    }
    return (
        <div>
            <div className=" row g-3 w-30 mx-auto border border-4 shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={createNewUser} className="row g-3 ">
                    <div className="col-12 w-100">
                        <label for="inputPassword4" className="form-label fs-4 fw-bold">Email</label>
                        <input onBlur={handaleEmail} type="email" className="form-control" id="inputPassword4" required />
                    </div>
                    <div className="col-12 w-100">
                        <label for="inputPassword4" className="form-label fs-4 fw-bold">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" required />
                    </div>
                    <div class="col-12 w-100">
                        <label for="inputPassword4" class="form-label fs-4 fw-bold">confirmPassword</label>
                        <input onBlur={handleConfirm} type="Password" class="form-control" id="inputPassword4" />
                    </div>

                    {/* <div className="col-md-2 w-100">
                        <label for="inputZip" className="form-label fs-4 fw-bold">Phone</label>
                        <input onBlur={handPhone} type="text" className="form-control" id="inputZip" />
                    </div> */}
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                        { error? error: '' }
                        < div className="col-12">
                    <button type="submit" className="btn btn-success">Sign in</button>
            </div>
            <div className="col-12">
                <button onClick={googleSignIn} type="submit" className="btn btn-success w-50">google</button>
            </div>
            <p>Already Have an Account ? <Link to='/login' onClick={navigateLogin}>Login</Link> </p>
        </form>
            </div >
        </div >
    );
};

export default SignUp;