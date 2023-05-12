import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from '../app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { FirebaseAppModule } from '@angular/fire/app';
import { ForgetComponent } from './forget/forget.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';


@NgModule({
  declarations: [
   LoginComponent,
   RegisterComponent,
   AuthComponent,
   ForgetComponent,
   VarifyEmailComponent
  ],

  imports: [
    AuthRoutingModule,
    FormsModule,
    FirebaseAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AuthModule { }
