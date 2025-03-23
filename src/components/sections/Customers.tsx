import React from 'react'
import { ColumnDef, PaginationState } from '@tanstack/react-table';
import TableServerSide from '../listComponents/TableServerSide';
import { QueryObserverPlaceholderResult, QueryObserverSuccessResult } from '@tanstack/react-query';

function Customers( {dataQuery, pagination, setPagination}: {dataQuery: QueryObserverSuccessResult<unknown, Error> | QueryObserverPlaceholderResult<unknown, Error>, pagination: PaginationState, setPagination: React.Dispatch<React.SetStateAction<PaginationState>>} ) {
  type ColDef = {
    id: string,
    title: string,
  }
  
  const columns = React.useMemo<ColumnDef<ColDef>[]>(
    () => [
      {
        accessorKey: "title",
        header: () => <div>title</div>,
        cell: ({ row }) => {
          return <div className="font-medium">{row.original.title}</div>
        },
      },
      {
        accessorKey: "id",
        header: () => <div>id</div>,
        cell: ({ row }) => {
          return <div className="font-medium">{row.original.id}</div>
        },
      },
    ],
    []
  )
  return (
    <>
      <TableServerSide columns={columns} dataQuery={dataQuery} pagination={pagination} setPagination={setPagination} />
    </>
  )
}

export default Customers