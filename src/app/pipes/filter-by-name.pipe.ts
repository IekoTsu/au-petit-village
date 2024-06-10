import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[] , search: string): any[] {
    if (!search){
      return products
    } else {
      return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    }
}}
