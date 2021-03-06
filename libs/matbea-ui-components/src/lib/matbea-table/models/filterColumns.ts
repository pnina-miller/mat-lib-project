import { Inject, Injectable } from '@angular/core';
import { object } from "@storybook/addon-knobs";

export class FilterColumn {
  ordernumber!: string;
  columnfiltertype!: string;
  columnnameenglish!: string;
  columnnamehebrew!: string;
  associatedcolumnname!: string;
  columnformatter!: string;

  filterValue!: string;
  stringFilterValue: string;

  constructor(col: any) {
    this.ordernumber = col.ordernumber;
    this.columnfiltertype = col.columnfiltertype;
    this.columnnameenglish = col.columnnameenglish;
    this.columnnamehebrew = col.columnnamehebrew;
    this.filterValue = col.filterValue;
    this.columnformatter = col.columnformatter;
    this.stringFilterValue = col.stringFilterValue;
    this.associatedcolumnname = col.associatedcolumnname;
  }

  checkFilter(line: any): boolean {
    return (
      this.filterValue ===
      (line[this.associatedcolumnname] || line[this.columnnameenglish.trim()])
    );
  }
}

export class SelectFilterColumn extends FilterColumn {
  options: string[] = [];

  constructor(col: any) {
    super(col);
    this.options = col.options;
  }

  checkFilter(line: any): boolean {
    return (
      this.filterValue ===
      (line[this.associatedcolumnname] || line[this.columnnameenglish.trim()])
    );
  }
}

export class BooleanFilterColumn extends FilterColumn {
  booleanValue!: boolean;
  constructor(col: any) {
    super(col);
    this.booleanValue = this.getBool(col.filterValue);
  }

  getBool(val: any) {
    return !!JSON.parse(val);
  }

  checkFilter(line: any): boolean {
    const lineValue = this.getBool(
      line[this.associatedcolumnname] || line[this.columnnameenglish.trim()]
    );
    return this.booleanValue === lineValue;
  }
}
@Injectable({ providedIn: 'root' })
export class StringFilterColumn extends FilterColumn {

  methodOptions: { [key: string]: any } = {
    contain: {
      name: 'מכיל',
      check: (filterValue: string, lineValue: string) =>
        lineValue.includes(filterValue),
    },
    startWith: {
      name: 'מתחיל ב',
      check: (filterValue: string, lineValue: string) =>
        lineValue.startsWith(filterValue),
    },
  };

  filterMethodKey!: string;

  constructor(@Inject('defaultCol') col: any) {
    super(col);
    this.filterMethodKey = col?.filterMethodKey;
  }

  checkFilter(line: any): boolean {
    const lineValue=(line[this.associatedcolumnname] || line[this.columnnameenglish.trim()]);
    if (!lineValue)
      return false;
    if (typeof lineValue === 'object')
      return this.methodOptions[this.filterMethodKey].check(this.filterValue,lineValue[0]);
    return this.methodOptions[this.filterMethodKey].check(this.filterValue,lineValue);
  }
}

@Injectable({ providedIn: 'root' })
export class NumericFilterColumn extends FilterColumn {
  public methodOptions: { [key: string]: any } = {
    lte: {
      name: '=<',
      check: (filterValue: string, lineValue: string) =>
        Number(filterValue) <= Number(lineValue),
    },
    equal: {
      name: '=',
      check: (filterValue: string, lineValue: string) =>
        Number(filterValue) === Number(lineValue),
    },
    gte: {
      name: '=>',
      check: (filterValue: string, lineValue: string) =>
        Number(filterValue) >= Number(lineValue),
    },
    range: {
      name: 'טווח',
      check: (
        filterValue: string,
        lineValue: string,
        secondValueForRange: string
      ) =>
        (Number(lineValue) - Number(filterValue)) *
          (Number(secondValueForRange) - Number(lineValue)) >=
        0,
    },
  };

  filterMethodKey!: string;
  secondValueForRange!: string;

  constructor(@Inject('defaultCol') col: any) {
    super(col);
    this.secondValueForRange = col.secondValueForRange;
    this.filterMethodKey = col.filterMethodKey;
  }

  checkFilter(line: any): boolean {
    return this.methodOptions[this.filterMethodKey].check(
      this.filterValue,
      line[this.associatedcolumnname] || line[this.columnnameenglish.trim()],
      this.secondValueForRange
    );
  }
}

export class MultiSelectFilterColumn extends FilterColumn {
  selectedOptions!: string[];
  options!: string[];

  constructor(col: any) {
    super(col);
    this.selectedOptions = col.selectedOptions;
    this.options = col.options;
  }
  checkFilter(line: any): boolean {
    //TODO
    return !!this.selectedOptions.find(
      (op) =>
        op ===
        (line[this.associatedcolumnname] || line[this.columnnameenglish.trim()])
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DateFilterColumn extends FilterColumn {
  public methodOptions: { [key: string]: any } = {
    in: {
      name: 'בתאריך',
      check: (filterValue: string, lineValue: string) =>
        this.prepareDate(filterValue) === this.prepareDate(lineValue),
    },
    before: {
      name: 'לפני',
      check: (filterValue: string, lineValue: string) =>
        this.prepareDate(filterValue) > this.prepareDate(lineValue),
    },
    after: {
      name: 'אחרי',
      check: (filterValue: string, lineValue: string) =>
        this.prepareDate(filterValue) < this.prepareDate(lineValue),
    },
    range: {
      name: 'בטווח תאריכים',
      check: (
        filterValue: string,
        lineValue: string,
        secondValueForRange: string
      ) =>
        (this.prepareDate(lineValue) - this.prepareDate(filterValue)) *
          (this.prepareDate(secondValueForRange) -
            this.prepareDate(lineValue)) >=
        0,
    },
  };

  filterMethodKey!: string;
  secondValueForRange!: string;

  constructor(@Inject('defaultCol') col: any) {
    super(col);
    this.secondValueForRange = col.secondValueForRange;
    this.filterMethodKey = col.filterMethodKey;
  }
  checkFilter(line: any): boolean {
    let dateString = line[this.associatedcolumnname] || line[this.columnnameenglish.trim()];
    let date = new Date(dateString);
    if(!date.getTime())
      date= new Date(dateString / 10000, (dateString % 10000) / 100, dateString % 100);

    return this.methodOptions[this.filterMethodKey].check(
      this.filterValue,
      date,
      this.secondValueForRange
    );
  }

  prepareDate(date: any): number {
    return new Date(date).getTime();
  }
}