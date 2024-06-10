import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private router: Router){}

  navigateToProduct() {
    this.router.navigate(['/product'], 
      { queryParams: { 
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        imgUrl: this.product.imgUrl,
        imgAlt: this.product.imgAlt
      } })
  }
}
