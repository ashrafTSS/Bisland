import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }

  //login method
  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
     localStorage.setItem('token','true')
     this.router.navigate(['/layout/home'])
    },err =>{
      alert(err.message)
      this.router.navigate(['/auth/login'])
    })
  }

  //register method
  register(email:string,password:string){
   this.fireAuth.createUserWithEmailAndPassword(email,password).then(res =>{
    alert('Register has successfully created')
    this.router.navigate(['/auth/login'])
    this.sendEmailForVarification(res.user)
   },err =>{
    alert(err.message)
    this.router.navigate(['/auth/register'])
   })
  }

  //signout method
  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/auth/login'])
    },err =>{
      alert(err.message)
    })
  }

  //forget password
  forgetPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/auth/varify-email'])
    },err =>{
     alert('Something went wrong')
    })
  }

  //email varification
  sendEmailForVarification(user : any){
     user.sendEmailVarification().then((res : any) =>{
      this.router.navigate(['/auth/varify-email'])
     },(err : any) =>{
      alert('Something went wrong not able to send')
     })
  }
}
