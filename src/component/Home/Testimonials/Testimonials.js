import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial'


const Testimonials = () => {
    const [testmonial, setTestmonial]=useState([]);

  useEffect(()=>{
    fetch('https://fierce-ravine-06382.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>setTestmonial(data))
},[])


    return (
        <div style={{ backgroundColor: '#F6F4F2' }}>
            <div className="text-center p-5">
                <h6 >Testimonial</h6>
            </div>



            <div class="container-xl">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>Why do people love me?</h2>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">

                                </div>
                                {
                                    testmonial.map(testdata => <Testimonial testimonial={testdata}></Testimonial>)
                                }
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;