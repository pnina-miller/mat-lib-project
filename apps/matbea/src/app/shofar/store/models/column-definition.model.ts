export interface ColumnDefinition {
  columnnameenglish: string,
  columnnamehebrew: string,
  display: string,
  ordernumber: string,
  removable: string,
  // typeDefinition?:  'array'| '%' | 'date' | "string"|'number',
  // formater?:(v)=> string, //class name for pipe
  // formater?: string,
  style?: string, //class for style
  action?(v):void, //name function
  associatedcolumnname?: string,
  columnfiltertype?: string,
  columnvalidationmessage?: string,
  columnvalidationtype?: string,
  savedbyuser?: string,
  columnformatter?: string,
  object?:any,
  notSortable?: boolean,
  subColumns?:any[]

}

