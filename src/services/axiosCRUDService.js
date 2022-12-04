import axios from "axios";

/**
 * metodo login para ReqRes
 * @param { string } email
 * @param { string } password
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //return the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

//Obtain all users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

//obtain all paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

//obtain user by id
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

//create User
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users', body)
}

//Update User
export const updateUser = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//Delete user
export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}
