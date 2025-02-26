import React from 'react'
import Layout from './Layout';
import ListFilters from './listComponents/ListFilters';
import Table from './listComponents/Table';
import { SiteMap } from '@/utils/siteMap';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from './ui/skeleton';

function AutenticatedHome({ component }: { component: SiteMap }) {

  const fetchPage = (): Promise<string[]> => {
    return fetch('http://localhost:3005' + component.path).then(res => res.json());
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['page'],
    queryFn: fetchPage,
  });

  if (isError) {
    return <Layout><span>Error: {error.message}</span></Layout>
  }

  return (
    <Layout>
      {isPending ? <div className='px-8'><Skeleton className="w-full h-[20px] rounded-full"/></div> :
        <>
          {component.pageType === 'list' && <><ListFilters /><Table /></>}
          <component.component data={data} />
        </>}
    </Layout>
  );
}

export default AutenticatedHome