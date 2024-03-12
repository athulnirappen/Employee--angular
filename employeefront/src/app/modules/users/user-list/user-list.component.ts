import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //class property
searchKey:string=""
  allusers:userSchema[]=[]
 today=new Date()
  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
   this.getUserList()
  }

  ///when userlist page open display all users from json file 



  //to get details of employee create a funtion

  getUserList() {
    this.api.getAllusers().subscribe({
      next: (result: any) => {
        console.log(result);
        //assign api response to class property
        this.allusers=result

        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
    
  }

  deleteuser(id: any) {
    
    this.api.deleteUser(id).subscribe({
      next: (res: any) => {
        this.getUserList()
        
      },
      error: (err: any) => {
        console.log(err);
        alert("try again")
      }
    })
    
  }

}
