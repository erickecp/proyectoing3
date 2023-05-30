import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valor1=0;
  valor2=0;
  resultado=0;

  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }
}

