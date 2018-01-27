import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenServiceProvider } from '../../providers/token-service/token-service';

// import { MyApp } from '../../app/app.component';
import { AccueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public message:string = '';

  private dataForm = {
    'email'    : null,
    'password' : null
  };

  constructor(private tsp: TokenServiceProvider, public navCtrl: NavController){
    
  }

  login() {
    this.tsp.login(this.dataForm.email, this.dataForm.password);
    // this.redirect();
  }

  // redirect() {
  //   if(this.tsp.getToken() != '') {
  //     this.message = 'Erreur de connexion.'
  //   }else{
  //     this.navCtrl.setRoot(AccueilPage);     
  //   }
  // }

  navigatePage() {
    this.navCtrl.setRoot(AccueilPage);   
  }

}

