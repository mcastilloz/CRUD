import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {NgForm} from '@angular/forms';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productServices: ProductsService) { }

  ngOnInit() {
    this.productServices.getProducts();
    this.resetForm();

  }

  onSubmit(productForm: NgForm) {

    if (productForm.value.$key == null ) {
    this.productServices.createProduct(productForm.value);
     } else {
      this.productServices.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null ) {
      productForm.reset();
      this.productServices.selectedProduct = new Product();

    }
  }
}
