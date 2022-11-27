import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [totalUser, setTotalUsers] = useState(12);
    const [selectedUser, setSelectedUser] = useState([]);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    

    useEffect(() => {
        obteinUsers();
    }, []);

    const obteinUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
            })
            .catch((error) => {
                alert(`Error: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users');
                console.table(users)
            });
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Paged Users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
            })
            .catch((error) => {
                alert(`Error: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users');
                console.table(users)
            });
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('Selected user', response.data);
                setSelectedUser(response.data)
            })
            .catch((error) => {
                alert(`Error: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users details');
                console.table(selectedUser)
            });
    }
    
    return (
        <div>
            <h2>
                Users:
            </h2>
            { users.map((user, index) => 
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
            )}
            <p>Showing {usersPerPage} users of {totalUser} in total </p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                { selectedUser != null ?
                    (
                        <div>
                        <h3>
                            User details
                        </h3>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt='Avatar' src={selectedUser.avatar} style={{height: '150px', width: '150px'}} />
                        </div>
                    ):
                        (<h6>Please click on a User to see the details</h6>)
                    }
            </div>

        </div>
    );
}

export default FetchExample;
