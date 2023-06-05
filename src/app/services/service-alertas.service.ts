import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServiceAlertasService {

  constructor(private snackBar: MatSnackBar) { }


  //-------------------ALERTAS DE SWEETALERT-----------------------------------------------

  // Para utilizar el servicio de la Alertas se debe inyectar el servicio 'ServiceAlertasService'
  // en el constructor del component.ts que las vayamos a utilizars.

  //Alerta alerta de SweetAlert básica
  alerta_basica(text: string){
    Swal.fire({text: text});
  }

  //Alerta de exito con SweetAlert 
  alerta_exito(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text
    });
  }

  //Alerta de error con SweetAlert
  alerta_error(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text
    });
  }

  //Alerta de confirmación con SweetAlert
  alerta_confirmacion(title: string, text: string, text_button: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: text_button,
      cancelButtonText: 'Cancelar'
    });
  }

  //Alerta exitosa con tiempo para que solo se cierre
  alerta_tiempo_exitosa(title: string, text: string){
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  //Alerta erronea con tiempo para que solo se cierre
  alerta_tiempo_erronea(title: string, text: string){
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  //Alerta con un input de SweetAlert
  alerta_con_input(title: string, text_button: string){
    Swal.fire({
      title: title,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: text_button,
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
    })
  }


  //-------------------------ALERTAS DE ANGULAR MATERIAL-------------------------------------------------------
  

  alerta_Snackbar(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }



}
