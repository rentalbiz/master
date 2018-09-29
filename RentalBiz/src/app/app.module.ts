import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './home/search/search.component';
import { MenuComponent } from './common/menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostadComponent } from './postad/postad.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostingsuccessComponent } from './postingsuccess/postingsuccess.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: ':categoryname/products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'postad', component: PostadComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'productdetail/:productid', component: ProductdetailComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductsComponent,
    SearchComponent,
    MenuComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PostadComponent,
    ProductdetailComponent,
    AboutusComponent,
    PostingsuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
