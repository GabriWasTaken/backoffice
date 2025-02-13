import React, { JSX } from 'react'
import Layout from './Layout';
import { useLogto } from '@logto/react';
import ListFilters from './listComponents/ListFilters';
import Table from './listComponents/Table';
function AutenticatedHome({ component, pageType }: { component: JSX.Element, pageType: string }) {
  const { signOut } = useLogto();

  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    signOut();
  }

  return (
    <Layout>
      {pageType === 'list' && <><ListFilters /><Table /></> }
      
      {/* in list type I have to render the filters and the table */}
      {/* in detail type I have to render the detail */}
      {component}
      <button onClick={logOut}>Logout</button>
    </Layout>
  );
}

export default AutenticatedHome