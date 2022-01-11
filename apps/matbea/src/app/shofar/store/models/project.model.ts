export interface Project {
  id: string
  achuzSchumChozim: number
  kamutYechidotDiyur: number
  kamutYechidotMechurot: number
  kmtYcdNimkeruBeTkf: number
  kodMutavBeShovar: number
  kodSector: number
  kodStatusBitzua: string
  misparAgaf: string
  misparMakal: number
  misparProyectSagur: number
  misparShura: string
  misparTavla: string
  schumChozeLeloMaam: number
  shemMenahelLakochot: string
  shemProyectSagur: string
  shemSector: string
  shemYishuv: string
  shmKablanimMeshurshar: string []
  shoviYechidotMechurot: number
  teurMisparCheshbon: string
  teurStatusBitzua: string
}

export function initProject(v: any):any {
  // v.achuzSchumChozim = v.achuzSchumChozim ? parseFloat(v.achuzSchumChozim).toFixed(2) : null;
  // v.schumChozeLeloMaam = v.schumChozeLeloMaam ? parseFloat(v.schumChozeLeloMaam).toFixed(2) : null;
  // v.shoviYechidotMechurot = v.shoviYechidotMechurot ? parseFloat(v.shoviYechidotMechurot).toFixed(2) : null;
  // v.shmKablanimMeshurshar = v.shmKablanimMeshurshar ? v.shmKablanimMeshurshar.split(',') : '';
  let teurMisparCheshbon = v.teurMisparCheshbon ? v.teurMisparCheshbon.split('-') : [];
  v.misparSnif = parseInt(teurMisparCheshbon[0]);
  v.misparCheshbon = parseInt(teurMisparCheshbon[1]);
  v.id = ''+v.misparProyectSagur+'&'+v.kodMutavBeShovar;
  return v;
}

