
export class FilterColumn {
  ordernumber!: string;
  columnfiltertype!: string;
  columnnameenglish!: string;
  columnnamehebrew!: string;

  filterValue!: string;
  stringFilterValue: string;

  constructor(col: any) {
    this.ordernumber = col.ordernumber;
    this.columnfiltertype = col.columnfiltertype;
    this.columnnameenglish = col.columnnameenglish;
    this.columnnamehebrew = col.columnnamehebrew;
    this.filterValue = col.filterValue;
    this.stringFilterValue = col.stringFilterValue;
  }

  checkFilter(line: any): boolean {
    return this.filterValue === line[this.columnnamehebrew]
  }
}

export class SelectFilterColumn extends FilterColumn {

  options: string[] = []

  constructor(col: any) {
    super(col)
    this.options = col.options;
  }

  checkFilter(line: any): boolean {
    return this.filterValue === line[this.columnnamehebrew];
  }
}

export class StringFilterColumn extends FilterColumn {

  methodOptions: string[] = ['contain', 'start with']
  filterMethod!: String;

  constructor(col: any) {
    super(col)
    this.methodOptions = col.methodOptions;
    this.filterMethod = col.filterMethod;
  }
  checkFilter(line: any): boolean {
    if (this.filterMethod === 'contain')
      return line[this.columnnamehebrew].includes(this.filterValue)
    else
      return line[this.columnnamehebrew].startsWith(this.filterValue)
  }
}
export class NumericFilterColumn extends FilterColumn {

  public static methodOptions: { [key: string]: any } = {

    lte: { name: '=<', check: (filterValue: string, lineValue: string) => Number(filterValue) <= Number(lineValue) },
    equal: { name: '=', check: (filterValue: string, lineValue: string) => Number(filterValue) === Number(lineValue) },
    gte: { name: '=>', check: (filterValue: string, lineValue: string) => Number(filterValue) >= Number(lineValue) },
    range: { name: 'טווח', check: (filterValue: string, lineValue: string, secondValueForRange: string) => (Number(lineValue) - Number(filterValue)) * (Number(secondValueForRange) - Number(lineValue)) >= 0

  },
  }

  filterMethodKey!: string;
  secondValueForRange!: string

  constructor(col: any) {
    super(col)
    this.secondValueForRange = col.secondValueForRange;
    this.filterMethodKey = col.filterMethodKey;
  }

  checkFilter(line: any): boolean {
    return NumericFilterColumn.methodOptions[this.filterMethodKey].check(this.filterValue, line[this.columnnamehebrew], this.secondValueForRange)

  }
}


export class MultiSelectFilterColumn extends FilterColumn {

  selectedOptions!: string[];
  options!: string[];

  constructor(col: any) {
    super(col)
    this.selectedOptions = col.selectedOptions;
    this.options = col.options;
  }
  checkFilter(line: any): boolean {
    //TODO
    return !!this.selectedOptions.find(op => op === line[this.columnnamehebrew])

  }
}

export class DateFilterColumn extends FilterColumn {

  public static methodOptions: { [key: string]: any } = {

    in: { name: 'בתאריך', check: (filterValue: string, lineValue: string) => filterValue === lineValue },
    before: { name: 'לפני', check: (filterValue: string, lineValue: string) => new Date(filterValue) > new Date(lineValue) },
    after: { name: 'אחרי', check: (filterValue: string, lineValue: string) => new Date(filterValue) < new Date(lineValue) },
    range: { name: 'בטווח', check: (filterValue: string, lineValue: string, secondValueForRange: string) => new Date(filterValue) > new Date(lineValue) && new Date(lineValue) < new Date(secondValueForRange) }
  }

  filterMethodKey!: string;
  secondValueForRange!: string

  constructor(col: any) {
    super(col)
    this.secondValueForRange = col.secondValueForRange;
    this.filterMethodKey = col.filterMethodKey;
  }

  checkFilter(line: any): boolean {
    return DateFilterColumn.methodOptions[this.filterMethodKey].check(this.filterValue, new Date(line[this.columnnamehebrew]).toDateString() , this.secondValueForRange)
  }
}