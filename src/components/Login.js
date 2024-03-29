import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';
import Input from './Input';
import FormAction from './FormAction';
import FormExtra from './FormExtra';

const fields = loginFields;
let fieldState = {};
fields.forEach(field => fieldState[field.id] = '')

export default function Login() {

    const [loginState, setLoginState] = useState(fieldState);
    const handleChange = (e) => { 
        setLoginState({ ...loginState, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        authenticateUser()
    }
    const authenticateUser = () => { 

    }
    return (
        <>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {fields.map(field => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Login" />
                </form>
        </>
    )
}