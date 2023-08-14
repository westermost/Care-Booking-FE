import axios from '../axios';
// import * as queryString from 'query-string';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {
        email, password
    });
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (userId) => {
    // return axios.post('/api/delete-user', data);
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const editUserService = (user) => {
    return axios.put('/api/edit-user', user);
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService
};
