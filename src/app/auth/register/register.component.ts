import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email: string = '';
password: string = '';

constructor(private auth:AuthServiceService){}

ngOnInit(): void {

}

register(){
  if(this.email == ''){
    alert('please enter email')
    return
  }
  if(this.password == ''){
    alert('please enter password')
    return
  }

  this.auth.register(this.email ,this.password)
  this.email = '';
  this.password = ''
}

}
