import { Car } from './../shared/car';
import { API_URLS } from './../config/api.url.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";




@Injectable()
export class CarService{

    constructor(private http:HttpClient){

    }
    getCars():Observable<any>{
        return this.http.get(API_URLS.CARS_URLS);
    }
    addCar(car:Car):Observable<any>{
        return this.http.post(API_URLS.CARS_URLS,car);
    }
    updateCar(car:Car):Observable<any>{
        return this.http.put(API_URLS.CARS_URLS, car);
    }
    deleteCar(id:Number):Observable<any>{
        return this.http.delete(API_URLS.CARS_URLS+`/${id}`);
    }
}