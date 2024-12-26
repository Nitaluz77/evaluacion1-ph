import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonInput, IonText, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.componet.scss']
  standalone: true,
  imports [IonicModule, FormsModule, CommonModule]
})
export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;

  calcular() {
    this.resultado = 2 * Math.PI * this.radio;
  }
}

