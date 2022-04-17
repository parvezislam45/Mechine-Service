import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const navigateSignup = () => {
        navigate = "/signup"
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="conainer row g-3 w-50 mx-auto border border-4 shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={handleLogin} className="row g-3 ">
                    <div className=" col-12 w-100">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-12 w-100">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <p>{error?.message}</p>
                    {loading && <p>Loading</p>}
                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                    <div className="col-12">
                    <button
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            alert('Sent email');
                        }}type="submit"className="btn btn-success">Reset password</button>
                    </div>
                    <p>Don't Have a Account ? <Link to ='/signup' onClick={navigateSignup}>Sign Up</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;