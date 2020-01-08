import { ContactComponent } from './contact/contact.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductResolver } from './product/product.resolver';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [

  {path:'home', component:HomeComponent,
children: [
  {path: 'product', component:ProductComponent,
  resolve:{
    products:ProductResolver
  
  },
  outlet:'contentOutlet'
},  {path:'wlc', component:WelcomePageComponent,
  outlet:'contentOutlet'},
{path:'car', component:CarComponent,outlet:'contentOutlet'},
{ path:'dashboard', component: DashboardComponent ,
outlet:'contentOutlet'},{
  path:'contact',component:ContactComponent,
  outlet:'contentOutlet'
},
{ path:'settings', component:SettingsComponent,
outlet:'contentOutlet'}
]},
  
  {path:'login' , component:LoginComponent},
  {path :'', redirectTo:'/home/(contentOutlet:wlc)', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProductResolver]
})
export class AppRoutingModule { }
