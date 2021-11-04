export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    approved: boolean;
  }
  export interface IfilterValues {
    [key: string]: DefinitionColumn;
  }
  
  export interface DefinitionColumn {
    type: string;
    name: string;
    value: string;
    options:string[];
  }
  