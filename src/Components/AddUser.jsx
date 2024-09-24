import axios from 'axios';
import { useState } from 'react';
import "./AddUser.css";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ city, setCity ] = useState( '' );
    const [ companyName, setCompanyName ] = useState( '' );
    const navigate = useNavigate()

    const handleSubmit = async ( e ) => {
        e.preventDefault(); 

        const userDetails = {
            name,
            email,
            phone,
            address: {
                street: "",
                suite: "",
                city,
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            company: {
                name:companyName,
                catchPhrase: "",
                bs: ""
            }
            
        };

try {
     await axios.post( "https://66f161c5415379191550a7a6.mockapi.io/user", userDetails );
   
    alert( "User added successfully!" )
        navigate( '/' ); 
            setName( '' );
            setEmail( '' );
            setPhone( '' );
            setCity( '' );
            setCompanyName( '' );
    
           
        } catch ( error ) {
            console.error( "Error adding user:", error );
            alert( "Error adding user!" );
        }
    };

    return (
        <div className="user-container d-flex flex-column  align-items-start">
            <h3>CREATE USER DETAILS</h3>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name" 
                        value={name}
                        onChange={( e ) => setName( e.target.value )}
                    />
                </div>
                <div className="m-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        value={email}
                        onChange={( e ) => setEmail( e.target.value )}
                    />
                </div>
                <div className="m-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={( e ) => setPhone( e.target.value )}
                    />
                </div>
                <div className="m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        value={city}
                        onChange={( e ) => setCity( e.target.value )}
                    />
                </div>
                <div className="m-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={( e ) => setCompanyName( e.target.value )}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;
