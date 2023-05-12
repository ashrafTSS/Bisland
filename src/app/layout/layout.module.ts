import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,AboutComponent, TopbarComponent,
  ],
  imports: [
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
