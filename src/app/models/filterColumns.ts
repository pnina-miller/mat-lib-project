
export class FilterColumn {
  ordernumber!: string;
  columnfiltertype!: string; 
  columnnameenglish!: string; 
  columnnamehebrew!: string; 

  filterValue!: String;
  stringFilterValue: String = '';

  constructor(col: any) {
    this.ordernumber = col.ordernumber;
    this.columnfiltertype = col.columnfiltertype;
    this.columnnameenglish = col.columnnameenglish;
    this.columnnamehebrew = col.columnnamehebrew;
    this.filterValue = col.filterValue;
    this.stringFilterValue = col.stringFilterValue;
  }

  checkFilter(line: any): boolean {
    return this.filterValue===line[this.columnnamehebrew]
  }
}

export class SelectFilterColumn extends FilterColumn {

  options: string[] = []

  constructor(col: any) {
    super(col)
    this.options = col.options;
  }

  checkFilter(line: any): boolean {
    return this.filterValue===line[this.columnnamehebrew];
  }
}

export class StringFilterColumn extends FilterColumn {

methodOptions: string[] = ['contain','start with']
  filterMethod!:String;

  constructor(col: any) {
    super(col)
    this.methodOptions=col.methodOptions;
    this.filterMethod=col.filterMethod;
  }
  checkFilter(line: any): boolean {
    if(this.filterMethod==='contain')
    return line[this.columnnamehebrew].includes(this.filterValue)
    else
    return line[this.columnnamehebrew].startsWith(this.filterValue)
  }
}

export class DateFilterColumn extends FilterColumn {
  // ordernumber!: string;
  // columnfiltertype!: string;
  // columnvalidationtype!: string;
  // columnvalidationmessage!: string;
  // associatedcolumnname!: string;
  // columnformatter!: string;
  // columnnameenglish!: string;
  // columnnamehebrew!: string;
  // display!: string;
  // removable!: string;
  // savedbyuser!: string;
  // filterValue!: String;
  // options: string[] = [];
  // stringFilterValue: String = '';

  constructor(col: DateFilterColumn) {
    super(col)
    // this.filterValue = col.filterValue;
    // this.options = col.options;
    // this.stringFilterValue=col.stringFilterValue;
  }
}