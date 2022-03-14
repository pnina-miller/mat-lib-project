import {
    AbstractField,
    TableField,
    TablePagination,
    TableSetting,
    VisibleActionMenu,
  } from 'dynamic-mat-table';
  
  export const tableColumnsConfig: TableField<any>[] = [
    { name: 'row' },
    { name: 'order' },
    {name: 'name' },
    { name: 'weight'},
    { name: 'color' },
    { name: 'brand' },
    { name: 'setting' },
  ];
  
  const actionMenu: VisibleActionMenu = {
    json: true,
    csv: true,
    print: true,
    columnSettingPin: true,
    columnSettingFilter: true,
    clearFilter: true,
  };
  
  export const tableSettingsConfig: TableSetting = {
    direction: 'ltr',
    visibaleActionMenu: actionMenu,
    rowStyle: {
      'background-color': '#70e181',
      color: 'ffffff',
    },
    alternativeRowStyle: {
      'background-color': 'afafaf',
      color: '55fab3',
    },
    autoHeight: true,
  };
  
  export const paginationConfig: TablePagination = {
    length: 100,
    pageIndex: 1,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15, 20],
    showFirstLastButtons: true,
  };
  
