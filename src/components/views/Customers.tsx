import React from 'react'
import { ColumnDef, PaginationState } from '@tanstack/react-table';
import TableServerSide from '../listComponents/TableServerSide';

function Customers( {dataQuery, pagination, setPagination}: {dataQuery: any, pagination: PaginationState, setPagination: any} ) {
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