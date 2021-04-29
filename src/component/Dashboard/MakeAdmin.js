import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const uri = `https://fierce-ravine-06382.herokuapp.com/addAdmin`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        console.log(data);
    };
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input placeholder="Name" className="form-control" {...register("name")} />

                    <input placeholder="Email Here" className="form-control" {...register("email", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="form-control" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default MakeAdmin;