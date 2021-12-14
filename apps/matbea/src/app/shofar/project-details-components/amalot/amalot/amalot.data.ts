
export interface AmalotDataType {
    misparProyectSagur: string,
    kodAmala: string,
    shiurHncaAmalatTipul: string,
    shiurAmlatArvutSna: string,
    shiurAmlArvLloHeter: string,
    shiurAmlArvDiraOcls: string,
    sachHakolAmalaNeto: string
  };

  export interface kodAmalaType {
    kod: string,
    name: string
  };
  
  export const KODEY_AMALOT: kodAmalaType[] = [
    {kod:"1", name:"פטור"},
    {kod:"2", name:"שיעור הנחה"},
    {kod:"4", name:'סכום בש"ח'},
    {kod:"3", name:"תעריפון"}
  ];