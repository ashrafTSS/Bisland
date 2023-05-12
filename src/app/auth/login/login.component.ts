import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email :string = ''
  password :string = ''

  constructor(private auth :AuthServiceService){}

  ngOnInit(): void {

  }

  login(){
    if(this.email == ''){
      alert('please enter email')
      return
    }
    if(this.password == ''){
      alert('please enter password')
      return
    }
    this.auth.login(this.email ,this.password)
    this.email = '';
    this.password = ''
  }


}
