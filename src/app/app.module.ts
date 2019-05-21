import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
/* FireBase  Dependencies*/
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { ProductComponent } from './components/products/product/product.component';
import { FormsModule } from '@angular/forms';
import {NgModule } from '@angular/core';

/*Services and eviroment*/
import { environment } from '../environments/environment';
import { ProductsService } from './services/products.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const myroutes: Route[] = [
  {path: '', component: DashboardComponent },
  {path: 'signup', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.myFirebase),
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(myroutes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
