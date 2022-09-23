import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
    if (u.username === 'ad' && u.password === 'ad') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');    //???
      this.router.navigateByUrl("role/admin/adminbash");  //???
    }
    if (u.username === 'emp' && u.password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl("role/emp/empdash");
    }
    if (u.username === 'oe' && u.password === 'oe') {
     
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl("role/operation/oedash");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr/credit");
    }
    if (u.username === 're' && u.password === 're') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'relation');
      this.router.navigateByUrl("role/relation/oecustomer");
    }
    if (u.username === 'abc' && u.password === 'abc') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'ab');
      this.router.navigateByUrl("role/ab/abcdash");
    }
    if (u.username === 'eli' && u.password === 'eli') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'empe');
      this.router.navigateByUrl("role/empe/elit");
    }
    if (u.username === 'pr' && u.password === 'pr') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'pro');
      this.router.navigateByUrl("role/pro/proadd");
    }
    if(u.username ==='ach' && u.password==='ach')
    {
      console.log(u.username,u.password)
      sessionStorage.setItem('role','acthead');
      this.router.navigateByUrl("role/acthead/dasb");
    }
    if(u.username ==='tl' && u.password==='tl')
    {
      console.log(u.username,u.password)
      sessionStorage.setItem('role','telcal');
      this.router.navigateByUrl("role/telcal/defList");
    }
    
  }
  signup(u) {
    console.log("signup");
  }
}
