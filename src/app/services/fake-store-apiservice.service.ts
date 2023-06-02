import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreAPIServiceService {
  isLoggedIn: boolean = false
  constructor(private http: HttpClient) {

  }

  apiurl="https://fakestoreapi.com/";


  getAllProducts() {
    return this.http.get(`${this.apiurl}products`)
  }
  getAllDelProducts() {
    return this.http.get('http://localhost/backendStore/getDelProducts.php')
  }

  getProductById(id) {
    return this.http.get(`${this.apiurl}products/${id}`)
  }

  getProductByCategoria(termino){
    return this.http.get(`${this.apiurl}products/category/${termino}`);
  }

  getCarritoDeUsuario(id){
    return this.http.get(`${this.apiurl}carts?userId=${id}`)
  }

  // getmarcas() {
  //   return this.http.get('http://localhost/backendStore/getMarcas.php');
  // };

  // getcategoria() {
  //   return this.http.get('http://localhost:8000/api/categoria');
  // }

  // deletePro(id: number): any {
  //   return this.http.delete(`http://localhost:8000/api/product/${id}`
  //   );
  // }

  // deleteCat(id: number): any {
  //   return this.http.delete(`http://localhost:8000/api/cat/${id}`
  //   );
  // }

  // reactPro(id: number): any {
  //   return this.http.get(`http://localhost/backendStore/reactProduct.php?idProduct=${id}`
  //   );
  // }

  // updateProduct(data: any): any {
  //   console.log(data.id);
  //   return this.http.put(`http://localhost:8000/api/editProduct/${data.id}`, data
  //   );
  // }

  // addProduct(data: any): any {
  //   console.log("Hola");

  //   return this.http.post('http://localhost:8000/api/newProduct', data

  //   );

  // }
}