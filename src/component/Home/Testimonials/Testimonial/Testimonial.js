import React from 'react';
import './Testimonial.css';

const TestimonialData = ({ testimonial }) => {
    return (
        <div class="carousel-item ">
            <div class="img-box"><img src={testimonial.image} alt="" /></div>
            <p class="testimonial">{testimonial.feedback}</p>
            <p class="overview"><b>{testimonial.name}</b>, <span>{testimonial.designation}</span></p>
        </div>
    );
};

export default TestimonialData;