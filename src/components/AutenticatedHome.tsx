import React, { JSX } from 'react'
import Layout from './Layout';
import { useLogto } from '@logto/react';

function AutenticatedHome({ component }: { component: JSX.Element }) {
  const { signOut } = useLogto();

  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    signOut();
  }

  return (
    <Layout>
      {component}
      <button onClick={logOut}>Logout</button>
    </Layout>
  );
}

export default AutenticatedHome