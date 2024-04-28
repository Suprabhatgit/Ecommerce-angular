import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
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
import { WomensWatchesComponent } from './components/collections/womens-watches/womens-watches.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishComponent } from './components/wish/wish.component';
import { WomenShoesComponent } from './components/collections/women-shoes/women-shoes.component';
import { AdminLoginComponent } from './Admin-dashboard/admin-login/admin-login.component';
import { UpdateProductComponent } from './Admin-dashboard/update-product/update-product.component';
import { AddProductComponent } from './Admin-dashboard/add-product/add-product.component';
import { ProductsComponent } from './Admin-dashboard/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard.spec';




const routes: Routes = [

  { path: '', component: HomeComponent },
  // ==================
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: AboutUsComponent },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { userType: 'user' },
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
    pathMatch: 'full',
    data: { userType: 'admin' },
  },
  // ==================
  { path: 'wish', component: WishComponent,canActivate:[AuthGuard] },
  { path: 'cart', component: CartComponent },
  // =================
  {
    path: 'Admin-dashboard',
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        data: { userType: 'admin' },
        canActivate: [AuthGuard],
      },
      {
        path: 'addNewProduct',
        component: AddProductComponent,
        data: { userType: 'admin' },
        canActivate: [AuthGuard],
      },
      {
        path: 'updateProduct',
        children: [
          {
            path: ':productId',
            component: UpdateProductComponent,
            data: { userType: 'admin' },
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
  // ==================

  {
    path: 'Product',
    children: [{ path: ':singleProduct', component: SingleProductComponent }],
    // ==================
  },
  {
    path: 'collection',
    children: [
      { path: 'all', component: AllProductsComponent },
      { path: 'furniture', component: FurnitureComponent },
      { path: 'groceries', component: GroceriesComponent },
      { path: 'laptops', component: ElectronicsComponent },
      { path: 'smartphones', component: SmartphonesComponent },
      { path: 'lighting', component: LightingComponent },
      { path: 'mens-watches', component: WatchesComponent },
      { path: 'womens-watches', component: WomensWatchesComponent },
      { path: 'mens-shoes', component: ShoesComponent },
      { path: 'womens-shoes', component: WomenShoesComponent },
      { path: 'womens-bags', component: WomenBagsComponent },
      { path: 'womens-dresses', component: WomenDressesComponent },
      { path: 'mens-shirts', component: MenShirtsComponent },
      { path: 'sunglasses', component: SunglassesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
