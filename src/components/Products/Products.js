import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h2>This is products</h2>
      <h5>{user ? user.displayName : 'No one'}</h5>
    </div>
  );
};

export default Products;
