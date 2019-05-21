import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Product} from '../models/product';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private db: AngularFireDatabase,
              private toastr: ToastrService ) {

  }
productlist: AngularFireList<any >;
selectedProduct: Product = new Product();


  getProducts() {
    return this.productlist = this.db.list('products');
  }

  createProduct(product: Product) {
       this.productlist.push({
          name: product.name,
          category: product.category,
          location: product.location,
          price: product.price
        });
  }
  updateProduct(product: Product) {
        this.productlist.update(product.$key, {
          name: product.name,
          category: product.category,
          location: product.location,
          price: product.price
         });
      }

  deleteProduct($key: string) {
    this.productlist.remove($key);
    this.toastr.success('Succesful Operation', 'Product Deleted');
  }
}
