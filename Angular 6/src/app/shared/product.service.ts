import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  AddProduct(product: product){
      return this.http.post(environment.apiBaseUrl+'/addProduct',product);
  }

  GetProduct(_id:String){
    return this.http.get(environment.apiBaseUrl+'/getProduct'+_id);
  }
  
  GetAllProduct(){
    return this.http.get(environment.apiBaseUrl+'/getAllProduct');
  }
}
