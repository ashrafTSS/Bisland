import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser: any;

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }
  loggedIn(){
    return localStorage.getItem('token')
  }

  //login method
  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( res =>{
     localStorage.setItem('token','true')
     if(res.user?.emailVerified == true){
      this.router.navigate(['/layout/home.'])
     }else{
        this.router.navigate(['/auth/login'])
     }

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
    // this.SendVerficationEmail(res.user)
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
  // forgetPassword(email:string){
  //   this.fireAuth.sendPasswordResetEmail(email).then(()=>{
  //     this.router.navigate(['/auth/varify-email'])
  //   },err =>{
  //    alert('Something went wrong')
  //   })
  // }

  //email varification
  // SendVerficationEmail(user: any){

  //   this.fireAuth.currentUser.then(u => u?.sendEmailVerification())
  //     .then(() =>{
  //       this.router.navigate(['/auth/varify-email']);
  //     }, (err: any) =>{
  //         alert('Something Went Wrong. Not able to send mail to registered Email.');
  //     })
  // }

}
