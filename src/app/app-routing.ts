import{RouterModule, Routes,}from '@angular/router';
import { NgModule } from '@angular/core';

//Arreglo de las rutas
const routes: Routes = [
   // {path: 'home', component: homeComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   // {path: '**', component: pagina404}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
