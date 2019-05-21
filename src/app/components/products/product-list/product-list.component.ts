import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../models/product';
import {element} from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productServices: ProductsService) {

  }

  ngOnInit() {
    this.productServices.getProducts()
      .snapshotChanges()
      .subscribe(list => {
        this.productList = [];
        list.forEach(item => {
          const x = item.payload.toJSON();
          // @ts-ignore
          x.$key   = item.key;
          this.productList.push(x as Product);
        });

      });

  }

  onEdit(product: Product) {
    this.productServices.selectedProduct = Object.assign({}, product);

  }
}

