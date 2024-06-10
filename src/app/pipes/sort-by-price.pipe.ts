import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order:number ): any[] {
    return products.sort(( a:any, b:any ) => {
      if ( a.price < b.price ) { return 1*order}
      else if ( a.price > b.price ) { return -1*order }
      else { return 0 }
    });
  }

}
