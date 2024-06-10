import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ProductCardComponent, CommonModule, SortByPricePipe, FilterByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsTable: any[] = [];
  sortOrder: number = 0;
  search : string = ""


  constructor(private products : ProductsService){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.productsTable = this.products.products
  }

  toggleSortOrder(order: number){
    this.sortOrder = order
  }

  filterByName(searchString: string){
    this.search = searchString

  }
}
;
