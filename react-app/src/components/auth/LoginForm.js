import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./authStyles.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/pages' />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="login-form-content-container">
        <div className="login-form-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="login-email-and-password-container">
          <div className="login-email-container">
            <label className="login-email-label" htmlFor='email'>Email</label>
            <input className="login-email-input"
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-password-container">
            <label className="login-password-label" htmlFor='password'>Password</label>
            <input className="login-password-input"
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          <button className="login-password-submit" type='submit'>Login</button>
        </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
