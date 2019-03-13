import { Component, OnInit } from '@angular/core';
import { product } from '../shared/product.model';
import { ProductService } from '../shared/product.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prod:product = {
    productName : "",
    category : "",
    price : null,
    deliveryCharge : null,
    discount : "",
    offerPrice : null,
    imgUrl : "",
    rating : null
  }

  constructor(private prodService: ProductService) { }

  ngOnInit() {
  }

  showSucessMessage: boolean;
  serverErrorMessages: string;

  onSubmit(form: NgForm) {
    this.prodService.AddProduct(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.prod = {
      productName : "",
      category : "",
      price : null,
      deliveryCharge : null,
      discount : "",
      offerPrice : null,
      imgUrl : "",
      rating : null
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}


