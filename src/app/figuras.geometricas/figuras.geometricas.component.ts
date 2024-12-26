import { Component, OnInit } from '@angular/core';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export abstract class FiguraGeometrica {
  abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super();
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    public lado1: number,
    public lado2: number,
    public lado3: number
  ) {
    super();
  }

  calcularPerimetro(): number {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
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
