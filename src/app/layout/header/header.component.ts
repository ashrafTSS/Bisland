import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Observable } from 'rxjs/internal/Observable';
import firebase from 'firebase/compat/app';
import { TranslateService } from '@ngx-translate/core';

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

  email : string = 'User'

  user$ = this.auth.userData
  constructor(public auth:AuthServiceService,public translate:TranslateService){
     //language
     translate.addLangs(['en','ar'])
     translate.setDefaultLang('en')

  }

  //language change method
  switchLang(lang:string){
     this.translate.use(lang)
  }

  ngOnInit(): void {}

  //logout
  logout(){
    this.auth.logout()
  }

}
