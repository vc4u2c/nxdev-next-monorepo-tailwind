import xlsx, { IJsonSheet } from 'json-as-xlsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function exportToExcel(data: any) {
  const columns: IJsonSheet[] = [
    {
      sheet: 'Orders',
      columns: [
        {
          label: 'Id',
          value: 'order',
        },
        {
          label: 'Status',
          value: 'status',
        },
        {
          label: 'Last Order',
          value: 'lastOrder',
        },
        {
          label: 'Amount',
          value: 'amount',
        },
        {
          label: 'Method',
          value: 'method',
        },
      ],
      content: data,
    },
  ];

  const settings = {
    fileName: 'Orders',
    extraLength: 3,
    writeMode: 'writeFile',
    writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
    RTL: false,
  };

  xlsx(columns, settings, (sheet) => {
    console.log('Orders File has finished downloading.');
  });
}
