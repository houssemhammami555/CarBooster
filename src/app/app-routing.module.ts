import { ProductResolver } from './product/product.resolver';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path:'dashboard', component: DashboardComponent },
  {path: 'product', component:ProductComponent,
  resolve:{
    products:ProductResolver
  
  }},
  {path:'car', component:CarComponent},
  {path :'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProductResolver]
})
export class AppRoutingModule { }
