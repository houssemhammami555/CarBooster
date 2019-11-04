import { ProductService } from './product.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';


@Injectable()
export class ProductResolver implements Resolve<any>{

    constructor(private ProdServ:ProductService){

    }
    resolve(){
        return this.ProdServ.getProducts();
    }
}