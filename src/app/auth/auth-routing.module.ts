import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { ForgetComponent } from './forget/forget.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';


const routes: Routes = [
  // {path:'auth',component:AuthComponent,children:[
// {path: '', redirectTo : 'auth', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget',component:ForgetComponent},
  {path:'varify-email',component:VarifyEmailComponent}
  ]
  // }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
