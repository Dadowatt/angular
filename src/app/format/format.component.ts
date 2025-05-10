import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-format',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './format.component.html',
  styleUrl: './format.component.css'
})
export class FormatComponent {
  nom:string = 'watt';
  taille:number = 12.5;
  prenom:string = "DADO";
  today= new Date();
  texte:string = "Bonjour";
}
