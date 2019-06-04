import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loginForm: FormGroup;
  userEmails;
  constructor( private userService: UsersService){}

  ngOnInit(){
  
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required])
    })

    this.userService.getAllUserEmail().subscribe(data => {
      this.userEmails = data
    })
    
    
  }

}


