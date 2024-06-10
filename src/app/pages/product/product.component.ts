import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
   this.route.queryParams.subscribe((params) => {
    this.product = {
      id: params['id'],
      name: params['name'],
      price: params['price'],
      description: params['description'],
      imgUrl: params['imgUrl'],
      imgAlt: params['imgAlt']
     }
  })}

  readMore(event : Event){
    let productDescription = document.getElementById("description")
    let readBtn = (event.target as HTMLElement)

    if(productDescription){

      if(window.getComputedStyle(productDescription).overflow == "hidden"){
        productDescription?.classList.toggle('active')
        readBtn.textContent = "Lire moin"
      } else{
        productDescription?.classList.toggle('active')
        readBtn.textContent = "Lire la suite"
      }

    }
    
  

  }

}
