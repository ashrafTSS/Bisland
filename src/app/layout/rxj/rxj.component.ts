import { Component } from '@angular/core';
import { Subscription, from, interval, map, pluck, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-rxj',
  templateUrl: './rxj.component.html',
  styleUrls: ['./rxj.component.css']
})
export class RxjComponent {
  myColor: string = '';

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

  //tap
  tapCh(){
    let checkSt:Subscription
    const source = interval(2000)
    const color = ['red','blue','pink','green','brown']
    checkSt = source.pipe(
      tap(res=>{
        this.myColor = color[res]
        console.log('tab before => ' + res);

        if(res == 5){
          checkSt.unsubscribe()
        }
      }),
      map(res => color[res]),
      tap(res=>{console.log('tap after => ' + res);
      })
      )
    .subscribe(res=>{
      console.log(res);
      this.print(res)

    })

  }

  //element
  print(val: string){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('tapId')?.appendChild(el)
  }


}
