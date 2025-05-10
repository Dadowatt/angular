import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  list = [
    { nom: 'téléphone', photo: '../assets/img/tof5.jpg',
      description: 'description de telephone',
      quantity: 0,
      commentaire: 'commentaire du produit',
      dispo: true 
    },
    { nom: 'ordinateur',
      photo: '../assets/img/tof2.jpg',
      description: 'description de ordinateur',
      quantity: 0,
      commentaire: 'commentaire du produit',
       dispo: false 
      },
    { nom: 'tablette',
      photo: '../assets/img/tof3.jpg',
      description: 'description de tablette',
      quantity: 0,
      commentaire: 'commentaire du produit',
       dispo: true 
      }, 
    { nom: 'modeme',
      photo: '../assets/img/tof4.jpg',
      description: 'description de modeme',
      quantity: 0,
      commentaire: 'commentaire du produit',
       dispo: false 
      }
  ];

}
