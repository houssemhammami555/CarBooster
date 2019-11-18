
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private dataProdParRef ={
      labels:   [],
      datasets:[]
    };  
     private dataLinearGraphProducts ={
      labels:   [],
      datasets:[]
    };
  constructor(private prodService:ProductService) { }

  ngOnInit() {
 
    
     const datasetsPrice = {
      label: "Price",
      data: []
    };
     const datasetsStock = {
      label: "Quantity",
      data: []
    };
   this.prodService.getProducts().subscribe(list=> list.forEach(product =>{
    console.log(product.ref);
    console.log(product.price);
    this.dataProdParRef.labels.push(product.ref);
    datasetsPrice.data.push(product.price);
    console.log(product.price);
    datasetsStock.data.push(product.quantity);
   }));
   
   this.dataProdParRef.datasets.push(datasetsStock);
   this.dataProdParRef.datasets.push(datasetsPrice);

  
  }
  
}
