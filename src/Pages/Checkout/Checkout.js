import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const notify = () => toast("thanks for checkout !");
    return (
        <div>
            <h1>Checkout</h1>
            <div className="row g-3 w-50 mx-auto border border-4 shadow p-3 mb-5 bg-body rounded">
                <form className="row g-3 ">
                    <div className="col-12">
                        <label for="inputPassword4" className="form-label fs-4 fw-bold">Name</label>
                        <input type="text" className="form-control" id="inputPassword4" required />
                    </div>
                    <div className="col-12">
                        <label for="inputPassword4" className="form-label fs-4 fw-bold">Address</label>
                        <input type="text" className="form-control" id="inputPassword4" required />
                    </div>
                    <div class="col-12 w-100">
                        <label for="inputPassword4" class="form-label fs-4 fw-bold">Profession</label>
                        <input type="text" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div className="col-12">
                        <button onClick={notify} type="submit" className="btn btn-success">Thanks For CheckOut</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;