import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const evenData={
            name: data.name,
            designation: data.designation,
            feedback: data.feedback ,
            image:loggedInUser.photoURL           
        };
        const uri=`https://fierce-ravine-06382.herokuapp.com/addReview`
        fetch(uri,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evenData)
        })
        console.log(evenData);
        
    };

    
    return (

        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex " style={{height:"100vh"}}>
                <div className="col-md-6">



                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group mt-5">
                            <input defaultValue={loggedInUser.name} placeholder="Name Here" {...register("name")} class="form-control" />
                        </div>
                        <div class="form-group mt-5">
                            <input placeholder="Company Name, Designation" {...register("designation")} class="form-control" />
                        </div>

                        <div class="form-group">
                            <textarea name="review" {...register("feedback")} cols="70" rows="3" placeholder="Write Your Feedback Here"></textarea>
                        </div>


                        <input type="submit" className="form-control btn btn-secondary" />
                    </form>


                </div>

            </div>

        </div>

    );
}


export default Review;