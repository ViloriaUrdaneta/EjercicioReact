import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUser, deleteUserByID } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid Email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')
        }
    );

    const authUser = (values) => {
        login(values.email, values.passwords)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('login failure');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Loging done'))
    }

    //Crud examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if(response.data.data && response.status ===200){
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201){
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not created')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if(response.data && response.status ===200){
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not updated')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if(response.data && response.status ===204){
                    alert('User deleted successfully')
                }else{
                    throw new Error('User not deleted')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                /**Initial values that the form will take */
                initialValues={ initialCredentials }
                /**Yup validation Schema */
                validationSchema = { loginSchema }
                /**onSubmit Event */
                onSubmit = {async (values) => {
                    authUser(values)
                }}
            >

                {/**We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {/**Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password"/>
                            {/**Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? <p>Login your credentials...</p> : null}
                        </Form>
                )}
                
            </Formik>
            <div>
                <button onClick={obtainAllUsers}>
                    Get all users with axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get all paged users with axios
                </button>
                <button onClick={() => obtainUserByID(1)}>
                    Get user 1
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Create user
                </button>
                <button onClick={() => updateUserByID(1, 'morpheus', 'developer')}>
                    Update user
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete user
                </button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
