import { MatPaginatorIntl } from '@angular/material/paginator';

export class MatbeaPaginatorIntl extends MatPaginatorIntl{
    constructor(){
        super();
        this.itemsPerPageLabel = "כמות לדף";
      this.firstPageLabel = "דף ראשון";
      this.lastPageLabel = "דף החרון";
       this.previousPageLabel = "קודם";
        this.nextPageLabel = "הבא";
         this. getRangeLabel = (page: number, pageSize: number, length: number): string => {
            const of = 'מתוך';
            if (length === 0 || pageSize === 0) {
              return "0 " + of + " " + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
        
            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + " - " + endIndex + " " + of + " " + length;
          };
    }
}