import React from 'react';
import { useTranslation } from 'react-i18next';

function Dashboard({data}:{data: string[]}) {
  const { t } = useTranslation();

  console.log(t('description'));
  console.log(data);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard