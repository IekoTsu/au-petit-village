import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    { 
      id: 1, 
      name: "Figurine Astérix - Xl", 
      price: 20, 
      description: "Découvrez la splendide et très grande figurine de collection Astérix ! (30 cm de hauteur)", 
      imgUrl:"../assets/img/produits/figurine-asterix.jpg", 
      imgAlt:"Un personnage de dessin animé au crâne imposant et au nez proéminent." 
    },
    { 
      id: 2, 
      name: "Figurine Astérix", 
      price: 35, 
      description: "Superbe figurine de collection en résine issue du célèbre Astérix et Cléopâtre en exclusivité sur Toutatis, l'é-choppe d'Astérix. Elle est inspirée d'un des albums les plus iconiques d'Albert Uderzo et René Goscinny: il s'agit du 6ème album des aventures d'Astérix et Obélix paru en 1968, Astérix et Cléopâtre. Elle a d'ailleurs été réalisée sur les bases du dessin situé en case 4 de la planche 43 de ce même album.", 
      imgUrl:"../assets/img/produits/les-12-attitudes-d-asterix.jpg", 
      imgAlt:"Un personnage de dessin animé pointe du doigt quelque chose." 
    },
    { 
      id: 3, 
      name: "Figurine Abraracourcix", 
      price: 20, 
      description: "Craquez pour cette belle figurine en plastique de 9 cm aux finitions soignées ! Poursuivez vos aventures dans l’univers des irréductibles Gaulois avec le livre d’Astérix ! Centré sur l’album Le combat des chefs, ce livre La Galerie des personnages, au format 20 x 20 cm avec une couverture rigide, révèle au lecteur la création et l’évolution du personnage d’Abraracourcix à travers les années. Saviez-vous qu'avant de devenir humoriste, René Goscinny a développé très jeune un talent certain de dessinateur? Découvrez en exclusivité ses dessins dans ce livre!", 
      imgUrl:"../assets/img/produits/figurine-abraracourcix.jpg", 
      imgAlt:"Un homme en costume vert et rouge, une figurine pleine de couleur et de style." 
    },
    { 
      id: 4, 
      name: "Figurine Obélix et Idéfix", 
      price: 20, 
      description: "Craquez pour cette belle figurine en plastique de 11cm aux finitions soignées ! Poursuivez vos aventures dans l’univers des irréductibles Gaulois avec un livre ! Ce livre La Galerie des personnages, au format 20 x 20 cm avec une couverture rigide, révèle au lecteur la création et l’évolution du personnage d’Obélix à travers les années. N’oublions pas bien sûr l’histoire du petit chien Idéfix ! Enfin, découvrez la jeunesse de René Goscinny et d’Albert Uderzo grâce à des documents exclusifs !", 
      imgUrl:"../assets/img/produits/obelix-et-Idefix.jpg", 
      imgAlt:" Une figurine d'un personnage de dessin animé tenant son chien." 
    },
    { 
      id: 5, 
      name: "Figurine Astérix - Pile d'albums", 
      price: 53, 
      description: "Retrouvez une nouvelle version d'Astérix avec une pile d'albums ! ", 
      imgUrl:"../assets/img/produits/asterix-pile-d-albums.jpg", 
      imgAlt:"Figurine d'homme lisant un livre avec un chien assis à côté de lui." 
    },
    { 
      id: 6, 
      name: 'Figurine Obélix - Obélix et son tonneau', 
      price: 40, 
      description: "Retrouvez Obélix et son tonneau, les romains vont passer un sale quart d'heure !", 
      imgUrl:"../assets/img/produits/obelix-et-son-tonneau.jpg", 
      imgAlt:"Figurine de Obélix une personnage d'un dessin animé tenant un tonneau, souriant"
    }
  ]
  constructor() {} 
}
