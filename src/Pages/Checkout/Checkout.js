import { Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const notify = () => toast("thanks for checkout !");
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Checkout</h2>
                    <Typography variant='caption' gutterBottom>Well Come To David Machine Servicing</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your Email" />
                    <TextField fullWidth label='Address' placeholder="Enter your Address" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="My Service is Honestly"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="All Time get Special Offer"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Service Warrenty Available"
                    />
                    <div className="col-12">
                        <button onClick={notify} type="submit" className="btn btn-success">Thanks For CheckOut</button>
                        <ToastContainer />
                    </div>
                </form>
            </Paper>
        </Grid>
    );
};

export default Checkout;