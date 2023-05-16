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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpLoaderFactory } from '../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,AboutComponent, TopbarComponent, CompanyComponent, ProjectComponent
  ],
  imports: [
    LayoutRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoader,
          deps: [HttpClient]
      }
  })
  ],
  exports : [],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}
