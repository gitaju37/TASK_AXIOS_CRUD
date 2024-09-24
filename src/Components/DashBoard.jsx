import { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
    const [ users, setUsers ] = useState( [] );
    const [ filterUsers, setFilterUsers ] = useState( [] );
    const navigate = useNavigate();

    const getAllUsers = async () => {
        const res = await axios.get( "https://66f161c5415379191550a7a6.mockapi.io/user" );
        setUsers( res.data );
        setFilterUsers( res.data );
    };

    useEffect( () => {
        getAllUsers();
    }, [] );

    const handleSearch = ( e ) => {
        const searchText = e.target.value.toLowerCase();
        const filteredUsers = users.filter( ( user ) =>
            user.name.toLowerCase().includes( searchText ) || user.company.name.toLowerCase().includes( searchText )
        );
        setFilterUsers( filteredUsers );
    };

    const handleDelete = async ( id ) => {
        try {
            await axios.delete( `https://66f161c5415379191550a7a6.mockapi.io/user/${id}` );
            setFilterUsers( filterUsers.filter( user => user.id !== id ) );
            setUsers( users.filter( user => user.id !== id ) );
            alert( "User deleted successfully!" );
        } catch ( error ) {
            console.error( "Error deleting user:", error );
            alert( "Error deleting user!" );
        }
    };

    return (
        <div className="dashboard-container">
            <h3>CRUD OPERATION USING REACT.JS</h3>
            <div className="input-search">
                <input type="search" placeholder="Search" onChange={handleSearch} />
                <button className="btn btn-success" onClick={() => navigate( '/adduser' )}>+ Add Record</button>
            </div>
            <table className="table">
                <thead className="t-head">
                    <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>CITY</th>
                        <th>COMPANY NAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody className="t-body" >
                    {filterUsers.map( ( user, index ) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => navigate( `/edituser/${user.id}` )}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete( user.id )}>Delete</button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>

        </div>
    );
};

export default DashBoard;
