import { CookieService } from 'ngx-cookie-service';
import { CategoryService } from './settings/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './product/product.service';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { ChartModule } from "angular2-chartjs";
import { MyChartComponent } from './my-chart/my-chart.component';
import { SettingsComponent } from './settings/settings.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; 
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import { principalReducer } from './shared/principal.reducer';
import { ContactComponent } from './contact/contact.component';

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
    MyChartComponent,
    SettingsComponent,
    WelcomePageComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    StoreModule.forRoot({principal: principalReducer})
  ],
  providers: [ ProductService,
      CarService,
       AppService,
       CategoryService , 
        { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
      CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
