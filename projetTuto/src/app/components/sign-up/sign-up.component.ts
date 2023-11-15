import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
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
    if (!this.addUserForm.valid) {
      return false;
    } else {
      return this.userService.createUser(this.addUserForm.value).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      );
    }

  }

}
