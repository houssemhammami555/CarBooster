import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  Category:Category[];
  CategoryForm:FormGroup;
  selectedCate:Category;
  constructor(private catService:CategoryService, private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.onloadCat();
  }
  onloadCat(){
    this.catService.getCategorys().subscribe(
      data=> {this.Category = data}
    )
  }

  createForm(){
    this.CategoryForm = this.fb.group({
      name:['',Validators.required]

    });
  }
  addCat(){
    const cate = this.CategoryForm.value;
    this.catService.addCategory(cate).subscribe(
      res=>{
        this.initCat();
        this.onloadCat();
      }
    )
  }
  initCat(){
    this.selectedCate= new Category();
    this.createForm()
  }

}
