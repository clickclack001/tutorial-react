import React from 'react';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const FormComponent = () => {
    let email = '';
    let password = '';

    function handleChangeInput(event){
        if(event.target.name === 'email'){
            email = event.target.value;
        } else {
            password = event.target.value;
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(email.trim().length > 0 && password.trim().length > 0){
            console.log({email, password});
            email = '';
            password = '';
            document.querySelector('form').reset();
        } else {
            alert('Пожалуйста, заполните обязательные поля!');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <InputComponent autoComplete={'off'} onChange={handleChangeInput} type={'text'} placeholder={'Email'} name={'email'}/>
            <InputComponent autoComplete={'off'} onChange={handleChangeInput} type={'password'} placeholder={'Password'} name={'password'}/>
            <ButtonComponent type={'submit'}>Войти</ButtonComponent>
        </form>
    );
};

export default FormComponent;