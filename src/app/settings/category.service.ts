import { Category } from './../shared/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './../config/api.url.config';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService{

    constructor(private http: HttpClient){


    }

    getCategorys():Observable<any>{
        return this.http.get(API_URLS.CAT_URLS);
    }
    addCategory(Cat:Category ):Observable<any>{
       return this.http.post(API_URLS.CAT_URLS, Cat); 
    }
    updateCatcut(Cat:Category):Observable<any>{
        return this.http.put(API_URLS.CAT_URLS, Cat);
    }
    deleteCategory(id:Number):Observable<any>{
        return this.http.delete(API_URLS.CAT_URLS+`/${id}`);
    }
}