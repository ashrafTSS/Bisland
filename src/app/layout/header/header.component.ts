import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email : string = 'Profile'
  constructor(private auth:AuthServiceService){

  }
  ngOnInit(): void {

  }

  logout(){
    this.auth.logout()
  }

}
