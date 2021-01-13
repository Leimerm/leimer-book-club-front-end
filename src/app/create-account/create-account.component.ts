import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  newUserInfo: FormGroup = new FormGroup({
    user_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    password_confirmation: new FormControl("", [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addNewUser() {
    this.userService.createUser(this.newUserInfo.value).subscribe(data=>{
    console.log(data);
    this.router.navigate([`/book-list`]);
    })
  }

  clearUserInfo() {
    this.newUserInfo.reset(
    {userName: '',
    email: '',
    password: '',
    password_confirmation: ''
    }
    )
  }
}
