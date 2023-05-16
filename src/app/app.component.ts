import { Component } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bisLand';
  translate: any;
  lang : any;

  constructor(translate : TranslateService){
    translate.setDefaultLang('en');
    translate.addLangs(['en','ar']);
  }
  switchLang(lang: string) {
    this.translate.use(lang)
  }
}
