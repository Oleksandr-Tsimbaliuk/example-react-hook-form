import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperations';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const resetState = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = data => {
    const { email, password } = data;
    console.log(data);

    // const formInput = event.currentTarget;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <label className="">
          <span>Email:</span>
          <input
            {...register('email', { required: true })}
            type="text"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <span role="alert">{errors.email}</span>}
        </label>

        <label className="">
          <span>Password:</span>
          <input
            {...register('emapasswordil', { required: true })}
            type="text"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <span role="alert">{errors.email}</span>}
        </label>

        <button className="" type="submit">
          Log in
        </button>
        <NavLink to="/registration">Sign Up</NavLink>
      </form>
    </div>
  );
}
