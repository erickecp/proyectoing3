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

  getProductById(id) {
    return this.http.get(`${this.apiurl}products/${id}`)
  }

  getProductByCategoria(termino){
    return this.http.get(`${this.apiurl}products/category/${termino}`);
  }

  getCarritoDeUsuario(id){
    return this.http.get(`${this.apiurl}carts?userId=${id}`)
  }

  getAllCategorias(){
    return this.http.get(`${this.apiurl}products/categories`)
  }

  newProduct(data:any) {
    return this.http.post(`${this.apiurl}products`, data)
  }

  updateProduct(data:any) {
    return this.http.put(`${this.apiurl}products/${data.id}`, data)
  }
}