import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Observable } from 'rxjs/internal/Observable';
import firebase from 'firebase/compat/app';
import { HeaderService } from './header.service';
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

  //language change
  switchLang:any
  browserLang:any
  user$ = this.auth.userData
  constructor(public auth:AuthServiceService,private header:HeaderService,
    private translate:TranslateService){
     this.header.selectLang.subscribe(res=>{
      this.switchLang = res
      translate.use(res)
     })

     translate.addLangs(['ar','en'])
     translate.setDefaultLang('en')
     translate.use('en')
     this.browserLang = translate.getDefaultLang()
  }

  ngOnInit(): void {

  }


  logout(){
    this.auth.logout()
  }

  //language change

  selectedLanguage(lang){
   console.log(lang);
  //  this.switchLang = lang
  this.header.selectLang.next(lang)

  }

  languageChange(){
    this.translate.use(this.browserLang.match(/ar|en/)? this.browserLang : 'en')
  }

}
