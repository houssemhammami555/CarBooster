import { CategoryService } from './../settings/category.service';
import { Category } from './../shared/category';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  list:string[] =["cles","oil","moteur"];
  products:Product[];
  ProductForm: FormGroup;
  operation:String='add';
  selectedProd: Product;
  categoryz:Category [];
 // dispo:Boolean = false;
  constructor(private ProductService:ProductService , private CatService:CategoryService , 
    private fb: FormBuilder, private route:ActivatedRoute) {
  this.creatForm();
   }

  ngOnInit() {
     this.initProduct();
    this.products = this.route.snapshot.data.products;
    this.CatService.getCategorys().subscribe(
      data => { this.categoryz = data },
      error => {console.error("Cant load product from the server!")},
     ()=> {console.log(this.categoryz) }
    );

  }
  creatForm(){
    this.ProductForm = this.fb.group({
      ref:['',Validators.required],
      pname:['',Validators.required],
      descrip:'',
      quantity:'',
      price:'',
      category:''

    });
  }
  loadProduct(){
    this.ProductService.getProducts().subscribe(
      data => { this.products = data },
      error => {console.error("Cant load product from the server!")},
     ()=> {console.log(this.products) }
    );
  }
  addProduct(){


    const prod = this.ProductForm.value;
    this.ProductService.addProduct(prod).subscribe(
      res=>{
        this.initProduct();
        this.loadProduct();
      }
      
    );
    console.log(prod);
  }
  updateProduct(){
    this.ProductService.updateProdcut(this.selectedProd).subscribe(
      res => {
        this.initProduct();
        this.loadProduct();
      }
    );
  }
  initProduct(){
    this.selectedProd= new Product();
    this.creatForm()
  }
  deleteProduct(){

      this.ProductService.deleteProduct(this.selectedProd.id).subscribe(
        res =>{
          this.selectedProd = new Product();
          this.loadProduct();
        }
      )
  }



}
