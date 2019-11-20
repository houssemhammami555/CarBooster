import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

   cars:Car[];
   CarForm: FormGroup;
   operation:String='add';
   selectedCar:Car; 
  constructor(private CarService:CarService,private fb:FormBuilder) {
    this.CreatForm();
   }

  ngOnInit() {
    this.loadCars();
  }

  CreatForm(){
    this.CarForm = this.fb.group({
      mat:['',Validators.required],
      userCin:'',
      state:'',
      price:'',
      model:'',
      details:''

    });
  }
  loadCars(){
    this.CarService.getCars().subscribe(
      data => {this.cars = data},
      error =>{console.error("cant load cars from server !")},
      ()=>{console.log(this.cars)}
    );
  }


  deleteCar(){

    this.CarService.deleteCar(this.selectedCar.id).subscribe(
      res =>{
        this.selectedCar = new Car();
        this.loadCars();
      }
    )
}

}
