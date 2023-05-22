import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-rxj',
  templateUrl: './rxj.component.html',
  styleUrls: ['./rxj.component.css']
})
export class RxjComponent {

  constructor(){}

  dataUser:string = '';
  //plunk
  users = [
    {
      name: 'ashraf',
      skills: 'angular',
      job: {
        tile: 'Frond developer',
        exp: '1 year'
      },
    },
    {
      name: 'ali',
      skills: 'javascipt',
      job: {
        tile: 'web developer',
        exp: '2 year'
      },
    },
    {
      name: 'arsalan',
      skills: 'node.js',
      job: {
        tile: 'backend developer',
        exp: '3 year'
      },
    },
    {
      name: 'azad',
      skills: 'angular/node.js',
      job: {
        tile: 'fullstack developer',
        exp: '5 year'
      },
    },
  ];

  //plunk
  onPlunk(){
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe((res:any)=>{
      console.log(res);
      this.dataUser = res

    })
  }

}
