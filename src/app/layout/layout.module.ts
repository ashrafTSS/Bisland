import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { LayoutComponent } from '../layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { RxjComponent } from './rxj/rxj.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,AboutComponent, TopbarComponent, CompanyComponent, ProjectComponent, EmpInfoComponent, RxjComponent
  ],
  imports: [
    LayoutRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports : [],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }

