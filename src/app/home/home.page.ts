import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CirculoComponet } from '../figuras.geometricas/circulo/circulo.component';
import { TrianguloComponent } from '../figuras.geometricas/triangulo/triangulo.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports
})
export class HomePage {
  figura: string | null = null;
}
