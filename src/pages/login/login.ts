import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenServiceProvider } from '../../providers/token-service/token-service';

import { MyApp } from '../../app/app.component';

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
     this.afterLogin();
  }
  afterLogin(public app: MyApp) {      
     if(this.tsp.getToken()!=null && this.tsp.getRole() ===1 ) {
       app.addAdminMenu();
       this.navigatePage();
     }
  }
  navigatePage() {
    this.navCtrl.setRoot(AccueilPage);   
  }

}

