import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from '../app/layout/layout.module'
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

//language translator
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
     loader:{
      provide:TranslateLoader,
      useFactory: httpTranslateLoader,
      deps:[HttpClient]
     }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

  ],
  exports : [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AOT compilation support
export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http)
}
