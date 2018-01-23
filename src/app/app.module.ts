import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { AproposPage } from '../pages/a_propos/a_propos';
import { CompetencesPage } from '../pages/competences/competences';
import { ProjetsPage } from '../pages/projets/projets';
import { ContactPage } from '../pages/contact/contact';

// import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MessageServiceProvider } from '../providers/message-service/message-service';//
import { TokenServiceProvider } from '../providers/token-service/token-service';//

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    AproposPage,
    CompetencesPage,
    ProjetsPage,
    ContactPage,
    // SignupPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    AproposPage,
    CompetencesPage,
    ProjetsPage,
    ContactPage,
    // SignupPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    MessageServiceProvider,
    TokenServiceProvider
  ]
})
export class AppModule {}
