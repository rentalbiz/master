import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent },
  { path: ':categoryname/products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'postad', component: PostadComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'productdetail/:productid', component: ProductdetailComponent },
];
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
    PostingsuccessComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
