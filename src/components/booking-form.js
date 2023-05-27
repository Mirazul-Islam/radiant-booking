import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


const BookingForm = () => {
    const [startDate, setStartDate] = useState();
    const [value, onChange] = useState();
    return (
        <div className='pt-5'>
            <div  className='container'>
            <h1 className='mt-3'>Create Booking</h1>
                <form>
                    <div className="row mb-3">
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Name</label>
                            <input type="name" class="form-control" id="inputPassword4" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="form-group col">
                            <label for="inputState">Packages</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Deep Cleaning</option>
                                <option>Window Wiping</option>
                                <option>Carpet Vacuming</option>
                                <option>Spring Cleaning</option>
                                <option>Tile And Grout Cleaning</option>
                                <option>Eco-friendly Cleaning</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Date</label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Time</label>
                            <TimePicker className="form-control time-b" onChange={onChange} value={value} />
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="row mb-3">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Province/Territory</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Nova Scotia</option>
                                <option>Newfoundland and Labrador</option>
                                <option>Prince Edward Island</option>
                                <option>New Brunswick</option>
                                <option>Quebec</option>
                                <option>Ontario</option>
                                <option>Manitoba</option>
                                <option>Saskatchewan</option>
                                <option>Alberta</option>
                                <option>British Columbia</option>
                                <option>Yukon</option>
                                <option>Northwest Territories</option>
                                <option>Nunavut</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Postal Code</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                I Agree to Terms and Conditions
                            </label>
                        </div>
                    </div>

                    <div className='d-flex justify-content-end mb-3'>
                        <button type="submit" class="btn btn-primary custom-btn">Confirm Booking</button>
                    </div>
                </form>
                </div>
        </div>
    );
}

export default BookingForm;