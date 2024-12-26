import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css'],
  standalone: true,
  
  
})
abstract class FiguraGeometrica {
  constructor(public color: string) {}
  
  abstract calcularPerimetro(): number;
}

export class circulo extends FiguraGeometrica{
  radio!: number;
  override calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

}

export class triangulo extends FiguraGeometrica {
  ladoA: any;
  ladoB: any;
  ladoC: any;
  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
  
}
