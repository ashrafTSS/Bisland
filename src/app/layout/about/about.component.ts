import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  html:number = 100;
  css:number = 90;
  javascript:number = 75;
  php:number = 80;
  wordpress:number = 90;
  photoshop:number = 55;

  constructor(private translate:TranslateService){}
  // happy client
  projecthappy : number = 0
  projectCountStop:any = setInterval(()=>{
    this.projecthappy++;
    if(this.projecthappy == 232){
      clearInterval(this.projectCountStop)
    }
  },10)

    // project
    projectproject : number = 0
    projectCountStop1:any = setInterval(()=>{
      this.projectproject++;
      if(this.projectproject == 521){
        clearInterval(this.projectCountStop1)
      }
    },10)

    // support
    projectsupport : number = 0
    projectCountStop2:any = setInterval(()=>{
      this.projectsupport++;
      if(this.projectsupport == 1463){
        clearInterval(this.projectCountStop2)
      }
    },10)

     // hard
     projecthard : number = 0
     projectCountStop3:any = setInterval(()=>{
       this.projecthard++;
       if(this.projecthard == 20){
         clearInterval(this.projectCountStop3)
       }
     },500)
}
