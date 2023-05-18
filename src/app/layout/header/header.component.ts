import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Observable } from 'rxjs/internal/Observable';
import firebase from 'firebase/compat/app';

// interface User {
//   email: string;
//   // Add other properties as needed
// }
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  email : string = 'Profile'

  constructor(public auth:AuthServiceService){

  }

  ngOnInit(): void {

  }


  logout(){
    this.auth.logout()
  }

}
