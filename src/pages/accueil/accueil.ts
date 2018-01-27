import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenServiceProvider } from '../../providers/token-service/token-service';
// import { LoginPage } from '../login/login'; //OBLIGATOIRE

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'

})
export class AccueilPage {
  
  private token:string;

  constructor(public navCtrl: NavController, public tsp:TokenServiceProvider) {
  	this.token = tsp.getToken();
  	  if(this.token == '') {  	  	
      	//this.navCtrl.setRoot(LoginPage);
  	  }
  }

}
