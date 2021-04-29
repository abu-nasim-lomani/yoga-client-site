import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const AdminControl = () => {
    const [adminControl, setAdminControl]=useContext(UserContext);

    useEffect(()=>{
        fetch('https://fierce-ravine-06382.herokuapp.com/adminRecords')
        .then(res=>res.json())
        .then(data=>setAdminControl(data))
    },[])

    return (
        <div>
            
            
        </div>
    );
};

export default AdminControl;