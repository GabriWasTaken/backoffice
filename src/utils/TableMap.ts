export type TableMap = {
  siteMapId: string;
  columns: string[];
  // le colonne possono essere di vari tipi (labels, buttons)
  // le colonne le devo riempire con i dati proveninti dalle mie apis get list
};

const tableMap: TableMap[] = [
  {
    siteMapId: 'Customers',
    columns: ['name', 'email', 'actions'],
  }
];

export default tableMap;