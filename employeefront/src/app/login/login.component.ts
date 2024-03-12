import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
  
export class LoginComponent {

  // class property

  email: string = ""
  password: string = ""

  constructor(private api:ApiService,private navi:Router){}

  Login() {
    if (this.email && this.password) {
      // alert(`username:${this.username} password:${this.password}`)
      //compare username and password with admin details
      //we should get admin details from backend ie:http://localhost:3000/users
      //api call to :http://localhost:3000/users/1

      this.api.adminDetails().subscribe({
        next: (result: any) => {
          console.log(result);
          if (this.email === result.email && this.password === result.password) {
            this.navi.navigateByUrl("home")
            
          } else {
            alert("Invalid admin details")
          }
          
        },
        error: (res: any) => {
          console.log(res);
          
        }
      })
    } else {
      alert("please fill the form completely")
    }
  }
  

}
