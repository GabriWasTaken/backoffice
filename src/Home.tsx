import React, { useEffect } from 'react'
import { useLogto } from '@logto/react';
import Layout from './Layout';

function Home() {
  const { signIn, signOut, isAuthenticated, getIdTokenClaims } = useLogto();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const claims = await getIdTokenClaims();
        console.log("claims", claims);
      } else {
        signIn('http://localhost:3000/callback');
      }
    })();
  }, [getIdTokenClaims, isAuthenticated, signIn]);

  return isAuthenticated && (
    <Layout>
      Qua le mie pagine
    </Layout>
  );
}

export default Home