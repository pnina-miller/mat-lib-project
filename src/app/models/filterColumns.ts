
export abstract class FilterColumn {
  ordernumber!: string; //v
  columnfiltertype!: string; //v
  columnvalidationtype!: string;
  columnvalidationmessage!: string;
  associatedcolumnname!: string;
  columnformatter!: string;
  columnnameenglish!: string; //v
  columnnamehebrew!: string; //v
  display!: string;
  removable!: string;
  savedbyuser!: string;

  constructor(col: FilterColumn) {
    this.ordernumber = col.ordernumber;
    this.columnfiltertype = col.columnfiltertype;
    this.columnvalidationtype = col.columnvalidationtype;
    this.columnvalidationmessage = col.columnvalidationmessage;
    this.associatedcolumnname = col.associatedcolumnname;
    this.columnformatter = col.columnformatter;
    this.columnnameenglish = col.columnnameenglish;
    this.columnnamehebrew = col.columnnamehebrew;
    this.display = col.display;
    this.removable = col.removable;
    this.savedbyuser = col.savedbyuser;
  }
}

export class SelectFilterColumn extends FilterColumn {
  ordernumber!: string;
  columnfiltertype!: string;
  columnvalidationtype!: string;
  columnvalidationmessage!: string;
  associatedcolumnname!: string;
  columnformatter!: string;
  columnnameenglish!: string;
  columnnamehebrew!: string;
  display!: string;
  removable!: string;
  savedbyuser!: string;
  filterValue!: String;
  options: string[] = []

  constructor(col: SelectFilterColumn) {
    super(col)
    this.filterValue = col.filterValue;
    this.options = col.options;
  }
}


export class FilterColumnValue extends FilterColumn {
  ordernumber!: string;
  columnfiltertype!: string;
  columnvalidationtype!: string;
  columnvalidationmessage!: string;
  associatedcolumnname!: string;
  columnformatter!: string;
  columnnameenglish!: string;
  columnnamehebrew!: string;
  display!: string;
  removable!: string;
  savedbyuser!: string;
  filterValue!: String;
  options: string[] = []
  stringFilterValue: String = '';


  constructor(col: FilterColumnValue) {
    super(col)
    this.filterValue = col.filterValue;
    this.options = col.options;
    this.stringFilterValue=col.stringFilterValue;
  }
}