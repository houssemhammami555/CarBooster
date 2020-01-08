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
    this.initCar();
  }

  CreatForm(){
    this.CarForm = this.fb.group({
      mat:['',Validators.required],
      userCin:'',
      state:'',
      price:'',
      model:['',Validators.required],
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
  opera(){
    this.operation='add';
  }
    addCar(){
      const car = this.CarForm.value;
      car.state=false;
      this.CarService.addCar(car).subscribe(
        res=>{
          this.initCar();
          this.loadCars();
          console.log(car);
        }
      )
    }
    updateCar(){
      this.CarService.updateCar(this.selectedCar).subscribe(
        res=>{
          this.initCar();
          this.loadCars();
        }
      )
    }
initCar(){
  this.selectedCar = new Car();
  this.CreatForm()
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
