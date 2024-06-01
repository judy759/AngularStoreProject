import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product.model";

@Injectable({
    providedIn: 'root'
  })
export class ProductService{

  constructor(private _http:HttpClient){

  }
  getAllProducts(): Observable<Product[]>{
    return this._http.get<Product[]>('/api/products');
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>('/api/Products/?id='+id);
}

}    
