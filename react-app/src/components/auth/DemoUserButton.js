import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';

const DemoUserButton = () => {
  // const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const email = 'demo@aa.io';
  const password = 'password';

  const onDemoSignIn = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    history.push('/');
  };

  return <button onClick={onDemoSignIn}>Demo User</button>;
};

export default DemoUserButton;
