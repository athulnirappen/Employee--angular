import { Component } from '@angular/core';
import { userSchema } from '../user.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: userSchema = {}
  
  constructor(private api:ApiService,private router:Router){}


  addUser() {
    
    const { id, name, email, active } = this.user
    
    if (!id || !name || !email || !active) {
      alert("Please fill the form completely")
      
    } else {
      // alert("Save button Clicked")
      this.api.addUser(this.user).subscribe({
        next: (res: any) => {
          alert('new user successfully added')
          this.router.navigateByUrl("users")
          
        },
        error: (err: any) => {
          alert('cannot perform the action now please try after sometimes')
        }

      })
      
    }
  }

  Cancel() {

    this.user={}
    
  }

}
