import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory} from 'react-router-dom';
import { login } from '../../store/session';
import DemoUserButton from './DemoUserButton';

const LoginForm = () => {
  const history = useHistory()
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
    return <Redirect to='/' />;
  }

  const onClick = async (e) => {
    e.preventDefault();
    history.push('/sign-up');
  };

  return (
    <div className='log-in-container'>
      <div className='log-in-inner'>
        <form onSubmit={onLogin}>
          <div className='form-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='input-container'>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </div>
          </div>
          <div className='log-in-buttons'>
            <button type='submit'>Login</button>
            <button onClick={onClick}> Sign Up</button>
            <DemoUserButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
