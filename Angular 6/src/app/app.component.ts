import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from "@angular/router";
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private userService: UserService, private router: Router){

  }

  onLogout(){
    if(document.getElementById('loginFunc').innerHTML === 'Login'){
      this.router.navigate(['/login']);
    }else{
    this.userService.deleteToken();
    
    document.getElementById('loginFunc').innerHTML = 'Login'
    this.router.navigate(["/login"]);
    }
  }
}

