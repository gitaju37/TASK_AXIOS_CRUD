import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css"

const EditUser = () => {
    const [ user, setUser ] = useState( null );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ city, setCity ] = useState( '' );
    const [ company, setCompany ] = useState( '' );
    const { id } = useParams();
    const navigate = useNavigate();

    const getUser = async () => {
        const res = await axios.get( `https://66f161c5415379191550a7a6.mockapi.io/user/${id}` );
        setUser( res.data );
        setName( res.data.name );
        setEmail( res.data.email );
        setPhone( res.data.phone );
        setCity( res.data.address.city );
        setCompany( res.data.company.name );
    };

    useEffect( () => {
        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id] );

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        const updatedUser = {
            name,
            email,
            phone,
            address: {
                city,
                street: user.address.street,
                suite: user.address.suite,
                zipcode: user.address.zipcode,
                geo: user.address.geo,
            },
            company: {
                name: company,
            }
        };

        await axios.put( `https://66f161c5415379191550a7a6.mockapi.io/user/${id}`, updatedUser );
        alert( "User updated successfully!" );
        navigate( '/' );
    };

    return (
        <>
            <div className="edit-user-container">
                <div className="d-flex justify-content-around mt-3">
                    <h3>EDIT USER DETAILS</h3>
                    <button className="btn btn-primary mt-2" style={{ height: "45px" }} onClick={() => {
                        navigate( '/' )
                    }}>Dashboard</button>
                </div>
                {user && (
                    <form className="user-form" onSubmit={handleSubmit}>
                        <div className="m-3"><input type="text" className="form-control" value={name} onChange={( e ) => setName( e.target.value )} placeholder="Name" /></div>
                        <div className="m-3"><input type="email" className="form-control" value={email} onChange={( e ) => setEmail( e.target.value )} placeholder="Email" /></div>
                        <div className="m-3">  <input type="text" className="form-control" value={phone} onChange={( e ) => setPhone( e.target.value )} placeholder="Phone" /></div>
                        <div className="m-3"> <input type="text" className="form-control" value={city} onChange={( e ) => setCity( e.target.value )} placeholder="City" /></div >
                        <div className="m-3">  <input type="text" className="form-control" value={company} onChange={( e ) => setCompany( e.target.value )} placeholder="Company" /></div >
                        <button type="submit" className="btn btn-primary m-3">Update User</button>
                    </form>
                )}
            </div>
        </>
    );
};

export default EditUser;
