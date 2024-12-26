import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonInput, IonContent, 
  IonText, IonItem, IonLabel, IonButton, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardHeader, 
    IonCardContent, IonInput, IonText, IonItem, IonLabel, IonImg]

})
export class TrianguloComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  resultado: number | null = null;

  calcular() {
    this.resultado = this.lado1 + this.lado2 + this.lado3;
  }
}

