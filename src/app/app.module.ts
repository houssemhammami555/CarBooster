import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { ChartModule } from "angular2-chartjs";
import { MyChartComponent } from './my-chart/my-chart.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    DashboardComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    CarComponent,
    LoginComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [ ProductService,
      CarService, AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
