import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouseComponent } from './carouse/carouse.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const  routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:prodTitle', component: ProductDetailComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    SearchComponent,
    CarouseComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
