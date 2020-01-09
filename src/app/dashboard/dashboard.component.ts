import { Car } from './../shared/car';
import { CarService } from './../car/car.service';

import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private dataProdParPrice ={
      labels:   [],
      datasets:[]
    };  
     private dataProdParQuant ={
      labels:   [],
      datasets:[]
    };
    private   carZ ={
      labels:[],
      datasets:[]
    }
    fixedCar:Car[];
    nonFixedCar:Car[];
  constructor(private prodService:ProductService, private carService:CarService) { }

  ngOnInit() {
 
    
     const datasetsPrice = {
      label: "Price",
      data: []
    };
     const datasetsStock = {
      label: "Quantity",
      data: []
    };

    const datasetsCarfixd={
      label:"State",
      data: []
    }
   this.prodService.getProducts().subscribe(list=> list.forEach(product =>{
    console.log(product.ref);
    console.log(product.price);
    this.dataProdParPrice.labels.push(product.pname);
    this.dataProdParQuant.labels.push(product.pname);
  datasetsPrice.data.push(product.price);
    console.log(product.price);
    datasetsStock.data.push(product.quantity);
   }));
   
   this.dataProdParQuant.datasets.push(datasetsStock);
   this.dataProdParPrice.datasets.push(datasetsPrice);

  this.carService.getCars().subscribe(list=>list.forEach(car=>{
    if(car.state==true){
      this.fixedCar.push(car);
    }else{
      this.nonFixedCar.push(car);
    }
  
  }));
  console.log(this.fixedCar+'aaand non fixed '+this.nonFixedCar);
  }
  
}
