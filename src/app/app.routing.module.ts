import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCarritoComponent } from './components/shoppingCarrito/shopping-carrito.component';


const routes: Routes = [
 {path:'login', component: LoginComponent},
 {path:'home',component: HomeComponent},
 {path:'Productos', component: ShoppingCarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
