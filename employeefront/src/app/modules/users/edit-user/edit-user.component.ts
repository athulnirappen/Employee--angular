import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  // class property

  user:userSchema={}

  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
  ngOnInit(): void {

   this.existingUser(this.user.id)
    

  }

  existingUser(id:any) {
     this.route.params.subscribe((res: any) => {
      console.log(res);

      const { id } = res
      console.log(id);

      this.api.getExisting(id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.user=res
          
        },
        error: (err: any) => {
          console.log(err);
          
        }
      })


      
      
    })
  }

  updateuser() {
    this.api.updateUser(this.user.id, this.user).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("update successfully")
        this.router.navigateByUrl("users")
        
      },
      error: (err: any) => {
        console.log(err);
        alert("Cannot perform the action now please try again aftersometimes")
        
        
      }
    })
  }

  cancelUpdate(id: any) {
    
    this.existingUser(id)
    
  }

}
