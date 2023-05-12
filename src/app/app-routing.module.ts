import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  // {path: '', redirectTo : 'layout', pathMatch: 'full'},
{path:'layout',component:LayoutComponent, canActivate : [AuthguardGuard],
loadChildren:() => import('./layout/layout.module').then((l) => l.LayoutModule)},

{path: '', redirectTo : 'auth/login', pathMatch: 'full'},
{path:'auth',component:AuthComponent,
loadChildren:() => import('./auth/auth.module').then((a) => a.AuthModule)},
{path:'**',redirectTo : 'auth/login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
