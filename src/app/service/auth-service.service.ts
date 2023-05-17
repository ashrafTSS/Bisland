import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: Observable<firebase.User> | any;
  authState: any;
  auth: any;

  constructor(private fireAuth:AngularFireAuth,private router:Router) {
    this.userData = fireAuth.authState;
   }

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
        this.router.navigate(['/auth/varify-email'])
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
    this.sendVerificationEmail(res.user)
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
  forgotPassword(email : string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/auth/varify-email']);
    }, err => {
      alert('Something went wrong');
    })
}

  sendVerificationEmail(user : any) {
    this.fireAuth.currentUser.then((user:any) => {
      if (user) {
        return user.sendEmailVerification();
      }
    })
    .then(() => {
      // Email verification sent
      this.router.navigate(['/auth/varify-email']);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    });
  }

}
