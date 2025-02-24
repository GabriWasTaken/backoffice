import React from 'react'
import Layout from './Layout';
import { useLogto } from '@logto/react';
import ListFilters from './listComponents/ListFilters';
import Table from './listComponents/Table';
import { SiteMap } from '@/utils/siteMap';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

function AutenticatedHome({ component }: { component: SiteMap }) {
  const { signOut } = useLogto();
  const {t} = useTranslation();

  const fetchPage = () : Promise<string[]> => {
   return fetch('http://localhost:3005' + component.path).then(res => res.json());
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['page'],
    queryFn: fetchPage,
  });

  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    signOut();
  }

  if (isError) {
    return <Layout><span>Error: {error.message}</span></Layout>
  }


  return (
    <Layout>
      {isPending ? <span>Loading...</span> :
      <>
        {component.pageType === 'list' && <><ListFilters /><Table /></> }
        <component.component data={data} />
      </>}
      <button onClick={logOut}>{t('logout')}</button>
    </Layout>
  );
}

export default AutenticatedHome