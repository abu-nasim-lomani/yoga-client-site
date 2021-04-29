import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import Booking from './Booking/Booking';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const BookingList = () => {
    const { courseId } = useParams();
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [courses, setCourses]= useState([]);
    

    useEffect(()=>{
        fetch('https://fierce-ravine-06382.herokuapp.com/courses')
        .then(res=>res.json())
        .then(data=>{
            setCourses(data)
        })
    }, []);


    let title = '';
    let price = '';
    let duration = '';
    let image = '';
    const courseFind = courses.find(pd => pd._id === courseId);
    if (courseFind) {
        title=courseFind.title;
        price=courseFind.price;
        duration=courseFind.duration;
        image=courseFind.image_url;
    }

    const courseDetails={title: title, price: price, duration:duration, image:image}
    const shippingData={...courseDetails, ...loggedInUser};
    return (
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                     <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex p-5">
                   <div className="col-md-6">
                   <Booking courseFind={courseDetails}></Booking>
                   </div>
                   <div className="col-md-6">
                       <h3>Payment Method</h3>
                       <ProcessPayment shippingData={shippingData}></ProcessPayment>
                   </div>
                </div>

            </div>
    );
};

export default BookingList;