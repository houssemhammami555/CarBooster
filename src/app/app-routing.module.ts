import { ProductResolver } from './product/product.resolver';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
>>>>>>> 932b9c31ec664d6e5ac1c2fe52939b446d155b24


const routes: Routes = [
  {path:'home', component:HomeComponent,
children: [
  {path: 'product', component:ProductComponent,
  resolve:{
    products:ProductResolver
  
<<<<<<< HEAD
  },
  outlet:'contentOutlet'
},
{path:'car', component:CarComponent,outlet:'contentOutlet'},
{ path:'dashboard', component: DashboardComponent ,
outlet:'contentOutlet'}
]},
  
  {path:'login' , component:LoginComponent},
=======
  }},
  {path:'car', component:CarComponent},
>>>>>>> 932b9c31ec664d6e5ac1c2fe52939b446d155b24
  {path :'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProductResolver]
})
export class AppRoutingModule { }
