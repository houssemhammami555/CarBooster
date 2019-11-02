import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../shared/product';
import { API_URLS } from './../config/api.url.config';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService{

    constructor(private http: HttpClient){


    }

    getProducts():Observable<any>{
        return this.http.get(API_URLS.PRODUCTS_URLS);
    }
    addProduct(prod:Product ):Observable<any>{
       return this.http.post(API_URLS.PRODUCTS_URLS, prod); 
    }
    updateProdcut(prod:Product):Observable<any>{
        return this.http.put(API_URLS.PRODUCTS_URLS, prod);
    }
    deleteProduct(id:String):Observable<any>{
        return this.http.delete(API_URLS.PRODUCTS_URLS+`/${id}`);
    }
}