import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonInput, IonContent, IonText,
   IonItem, IonLabel, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonButton, IonLabel, IonCardTitle, IonCardHeader, 
    IonCardContent, IonInput, IonText, IonItem, IonCard]
})

export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;

  calcular() {
    this.resultado = 2 * Math.PI * this.radio;
  }
}


