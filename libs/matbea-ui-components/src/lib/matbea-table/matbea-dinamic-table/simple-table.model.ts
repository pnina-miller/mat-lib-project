import { TableRow } from 'dynamic-mat-table';

export interface TestElement extends TableRow {
  row: number;
  name: string;
  weight: string;
  color: string;
  brand: string;
}

  
const t=[{
    brand: "Tehran PIKEY",
    color: "Magenta",
    longText: "Multitrack recording — Descript dynamically generates a single combined transcript.",
    name: "Element #1",
    row: 1,
    type: "Sedan",
    weight: "64 KG",
     },{
    brand: "Irankhodro",
    color: "Green",
    id: 1,
    longText: "Live Collaboration: Real time multiuser editing and commenting.",
    name: "Element #2",
    option: {},
    row: 2,
    type: "SUV",
    weight: "46 KG",
     },{
    brand: "Irankhodro",
    color: "Yellow",
    id: 2,
    longText: "Overdub: Correct your voice recordings by simply typing. Powered by Lyrebird AI.",
    name: "Element #3",
    option: {},
    row: 3,
    type: "Truck",
    weight: "41 KG",
     },{
    brand: "SAIPA",
    color: "Yellow",
    id: 3,
    longText: "Use the Timeline Editor for fine-tuning with fades and volume editing.",
    name: "Element #4",
    option: {},
    row: 4,
    type: "Van",
    weight: "70 KG",
     },{
    brand: "SAIPA",
    color: "Magenta",
    id: 4,
    longText: "Our style of podcasting and editing wouldn’t be possible without Descript.",
    name: "Element #5",
    option: {},
    row: 5,
    type: "Coupe",
    weight: "54 KG",
    }
     ]
      
export function getData(n = 1000): TestElement[] {
    return t as TestElement[];
 /* return Array.from({ length: n }, (v, i) => ({
    row: i + 1,
    name: `Element #${i + 1}`,
    weight: Math.floor(Math.random() * 100) + ' KG',
    color: ['Red', 'Green', 'Blue', 'Yellow', 'Magenta'][
      Math.floor(Math.random() * 5)
    ],
    brand: [
      'Irankhodro',
      'SAIPA',
      'Kerman Khodro',
      'Zanjan Benz',
      'Tehran PIKEY',
    ][Math.floor(Math.random() * 5)],
    type: ['SUV', 'Truck', 'Sedan', 'Van', 'Coupe', 'Sports Car'][
      Math.floor(Math.random() * 6)
    ],
    longText: [
      'Overdub: Correct your voice recordings by simply typing. Powered by Lyrebird AI.',
      'Multitrack recording — Descript dynamically generates a single combined transcript.',
      'Our style of podcasting and editing wouldn’t be possible without Descript.',
      'Live Collaboration: Real time multiuser editing and commenting.',
      'Use the Timeline Editor for fine-tuning with fades and volume editing.',
      'Edit audio by editing text. Drag and drop to add music and sound effects.',
    ][Math.floor(Math.random() * 6)],
  }));*/
}

export const DATA: TestElement[] = getData(5);

