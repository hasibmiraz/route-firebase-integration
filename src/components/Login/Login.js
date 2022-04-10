import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: '20px' }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" placeholder="Password" name="" id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
