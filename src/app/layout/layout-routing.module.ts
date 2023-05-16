import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
// {path:'layout',component:LayoutComponent,children:[
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'service',component:ServiceComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'team',component:TeamComponent},
{path:'contact',component:ContactComponent},
{path:'company',component:CompanyComponent}
]
// }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
