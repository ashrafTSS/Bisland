import { Component, OnInit } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
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
  translate: any;
  lang: any;
  // user: any;
  // user: firebase.User | null = null;
  // user: User | null = null;

  // currentUser: firebase.User;
  // public user: Observable<User | null> | any;

  constructor(public auth:AuthServiceService,translate: TranslateService){
    translate.setDefaultLang('en')
    translate.addLangs(['en','ar'])
    // this.lang = localStorage.getItem('lang');
    // console.log('sfdsfhd423',translate.setDefaultLang('en'));

  }
  switchLang(lang: string) {
    this.translate.use(lang)
  }

  ngOnInit(): void {
    // this.getUser()

    // this.auth.authState.subscribe((user: User) => {
    //   this.user = user as User;
    // });
  }


  // getUser(){
  //   this.auth.authState.subscribe((user: any) => {
  //     this.user = user;
  //   });
  // }

  logout(){
    this.auth.logout()
  }

}
