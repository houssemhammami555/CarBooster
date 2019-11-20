
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
    this.dataProdParPrice.labels.push(product.pname);
    this.dataProdParQuant.labels.push(product.pname);
  datasetsPrice.data.push(product.price);
    console.log(product.price);
    datasetsStock.data.push(product.quantity);
   }));
   
   this.dataProdParQuant.datasets.push(datasetsStock);
   this.dataProdParPrice.datasets.push(datasetsPrice);

  
  }
  
}
