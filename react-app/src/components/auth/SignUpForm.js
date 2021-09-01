import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="signup-form" onSubmit={onSignUp}>
      <div className="signup-form-content-container">
        <div className="signup-form-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="signup-fields-container">
          <div className="signup-field-container">
            <label className="signup-form-label" >Username</label>
            <input className="signup-form-input"
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              ></input>
          </div>
          <div className="signup-field-container">
            <label className="signup-form-label" >Email</label>
            <input className="signup-form-input"
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              ></input>
          </div>
          <div className="signup-field-container">
            <label className="signup-form-label" >Password</label>
            <input className="signup-form-input"
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              ></input>
          </div>
          <div className="signup-field-container">
            <label className="signup-form-label" >Repeat Password</label>
            <input className="signup-form-input"
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              ></input>
          </div>
          <button className="signup-form-submit" type='submit'>Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
