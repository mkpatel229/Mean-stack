import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private prodService: ProductService ,private router : Router,private userService:UserService) { }

  products;
  userDetails;
  welcomeMsg;

  ngOnInit() {
    document.getElementById("navBar").style.display = '';
    if(this.userService.isLoggedIn()){
      document.getElementById('loginFunc').innerHTML = 'Logout';

      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
          localStorage.setItem("firstName",this.userDetails.fullName.split(' ')[0]);
          this.welcomeMsg = localStorage.getItem("firstName");
        },
        err => { 
          console.log(err);
          
        }
      );

    }else {
      this.welcomeMsg = null;
      document.getElementById('loginFunc').innerHTML = 'Login'
      this.userService.deleteToken();
    }

    this.prodService.GetAllProduct().subscribe(res => {
      this.products = res['prod'];
      //console.log(this.products)
    },
    err => { 
      console.log(err);
      
    })

    
    
  }

  onSelect() {
    this.router.navigateByUrl('/productDetails');
  }


}
