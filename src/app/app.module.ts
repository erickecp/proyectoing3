import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { PracticaComponent } from './practica/practica.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';

//Angular Material que uso Cesar
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent,
    LoginComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
