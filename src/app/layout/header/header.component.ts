import { Component, OnInit } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email : string = 'Profile'
  // email: string = ''
  translate: any;
  lang: any;

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

  }

  logout(){
    this.auth.logout()
  }

}
