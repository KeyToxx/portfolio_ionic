import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccueilPage } from '../pages/accueil/accueil';
import { AproposPage } from '../pages/a_propos/a_propos';
import { CompetencesPage } from '../pages/competences/competences';
import { ProjetsPage } from '../pages/projets/projets';
import { ContactPage } from '../pages/contact/contact';
import { TokenServiceProvider } from '../providers/token-service/token-service';


// import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{font: any,title: string, component: any}>;

  private token:string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { font: 'home', title: 'Accueil', component: AccueilPage },
      { font: 'pricetag', title: 'A propos', component: AproposPage },
      { font: 'done-all', title: 'Mes compétences', component: CompetencesPage },
      { font: 'code', title: 'Mes Réalisations', component: ProjetsPage },
      { font: 'mail', title: 'Contact', component: ContactPage },
      //{ title: 'Inscription', component: SignupPage },
      { font: 'log-in', title: 'Connexion Administrateur', component: LoginPage }
    ];

  }

  addAdminMenu(tsp: TokenServiceProvider) {   

    this.token = tsp.getToken();

    if(this.token) {


        let pagesAdmin = [
          { title: 'Test', component: AccueilPage },
          { title: 'Essai', component: AproposPage },
        ];

        this.pages.concat(pagesAdmin);

    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
