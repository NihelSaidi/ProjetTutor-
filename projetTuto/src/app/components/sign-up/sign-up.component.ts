import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent {

  addUserForm !: FormGroup;
  user: any = {};
  id: any;
  users: any;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);


    this.addUserForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      tel: [''],
    })

  }
  addUser() {
    if (this.id) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == this.id) {
          this.users[i] = this.user
        }
        
      }
      localStorage.setItem("users", JSON.stringify(this.users));
    } else {
      
      this.userService.createUser(this.user).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      )
    }

  }

}
