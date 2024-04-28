import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishComponent } from './components/wish/wish.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarDashboardComponent } from './shared/navbar-dashboard/navbar-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AllProductsComponent } from './components/collections/all-products/all-products.component';
import { ElectronicsComponent } from './components/collections/electronics/electronics.component';
import { FurnitureComponent } from './components/collections/furniture/furniture.component';
import { GroceriesComponent } from './components/collections/groceries/groceries.component';
import { LightingComponent } from './components/collections/lighting/lighting.component';
import { MenShirtsComponent } from './components/collections/men-shirts/men-shirts.component';
import { ShoesComponent } from './components/collections/shoes/shoes.component';
import { SmartphonesComponent } from './components/collections/smartphones/smartphones.component';
import { SunglassesComponent } from './components/collections/sunglasses/sunglasses.component';
import { WatchesComponent } from './components/collections/watches/watches.component';
import { WomenBagsComponent } from './components/collections/women-bags/women-bags.component';
import { WomenDressesComponent } from './components/collections/women-dresses/women-dresses.component';
import { WomenShoesComponent } from './components/collections/women-shoes/women-shoes.component';
import { WomensWatchesComponent } from './components/collections/womens-watches/womens-watches.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './Admin-dashboard/add-product/add-product.component';
import { AdminLoginComponent } from './Admin-dashboard/admin-login/admin-login.component';
import { ProductsComponent } from './Admin-dashboard/products/products.component';
import { UpdateProductComponent } from './Admin-dashboard/update-product/update-product.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    SingleProductComponent,
    WishComponent,
    FooterComponent,
    NavbarComponent,
    NavbarDashboardComponent,
    AllProductsComponent,
    ElectronicsComponent,
    FurnitureComponent,
    GroceriesComponent,
    LightingComponent,
    MenShirtsComponent,
    ShoesComponent,
    SmartphonesComponent,
    SunglassesComponent,
    WatchesComponent,
    WomenBagsComponent,
    WomenDressesComponent,
    WomenShoesComponent,
    WomensWatchesComponent,
    AddProductComponent,
    AdminLoginComponent,
    ProductsComponent,
    UpdateProductComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
