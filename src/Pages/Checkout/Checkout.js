import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <div className="row g-3 w-50 mx-auto border border-4 shadow p-3 mb-5 bg-body rounded">
            <form className="row g-3 ">
                <div className="col-12">
                    <label for="inputPassword4" className="form-label fs-4 fw-bold">Frist Name</label>
                    <input type="text" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                    <label for="inputPassword4" className="form-label fs-4 fw-bold">Last Name</label>
                    <input type="text" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                    <label for="inputPassword4" className="form-label fs-4 fw-bold">Address</label>
                    <input type="text" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                    <label for="inputPassword4" className="form-label fs-4 fw-bold">Email</label>
                    <input type="email" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12 w-100">
                    <label for="inputPassword4" className="form-label fs-4 fw-bold">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div class="col-12 w-100">
                    <label for="inputPassword4" class="form-label fs-4 fw-bold">Profession</label>
                    <input type="text" class="form-control" id="inputPassword4" />
                </div>

                <div className="col-md-2 w-100">
                    <label for="inputZip" className="form-label fs-4 fw-bold">Phone</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Thanks For CheckOut</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Checkout;