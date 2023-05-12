import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthServiceService){}

  ngOnInit(): void {

  }

  forget(){
    this.auth.forgetPassword(this.email)
      this.email = ''
  }

}
