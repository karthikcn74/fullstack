import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IBrand } from '@uxhm/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct> {
    return this.http.get<IProduct>('api/products/all');
  }

  getBrands(): Observable<IBrand> {
    return this.http.get<IBrand>('api/products/brands');
  }
}
