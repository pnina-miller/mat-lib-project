
import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
  name: 'pipeName'
})
export class PipePipe implements PipeTransform {

  transform(value: any, formater: any): any {
    if (formater&&formater.toLowerCase() == "int2dateformatter") {
      if (value) {
        value=String(value)
        if (value.length == 8) {
          
          let year = value.substr(0, 4);
          let mounth = value.substr(4, 2);
          let day = value.substr(6, 2);
          return `${day}/${mounth}/${year}`;
        } else {
          return '';
        }

      }
    }
    if (formater&&formater.toLowerCase() == "percent") {

      if (value) {
        value = parseFloat(value).toFixed(2).toString();
        return `${value}%`;
      } else {
        return '';
      }

    }
    if (formater&&formater.toLowerCase() == "yesno") {

      value = Number.parseInt(value);
      if (value == 1) {
        return 'כן';
      } else {
        return 'לא';
      }
    }
    if (formater&&formater.toLowerCase() == 'currency') {
      value = parseFloat(value).toFixed(0).toString();
      if (value.length > 3) {
        let des = value.substring(value.length - 3);
        let alaf = value.substring(0, value.length - 3);
        return `${alaf},${des}`;
      }

    }

    return value;
  }

}
