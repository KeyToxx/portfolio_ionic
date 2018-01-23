import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

import { MyApp } from '../../app/app.component';
import { AccueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  private data:{};

  private dataForm = {};

  constructor(public navCtrl: NavController, public http: Http, private messageService: MessageServiceProvider) {
  	this.getMessages();
  }

  getMessages(){
  	this.messageService.getMessages().subscribe(data => { this.data = data.json()});
  }

  login(user: string, password: string){
  	 
  }

  logForm() {
    console.log(this.dataForm);
    // http.get('https://www.aformac-vichy-app7.ovh/api/data?email='+this.dataForm['email']+"&password="+this.dataForm['password'])
    // .subscribe(data => { this.data = data.json()});
  }

  navigatePage() {
    // Let's navigate from TabsPage to Page1
    this.navCtrl.setRoot(AccueilPage);
  }


  // private data = '';

  // constructor(public navCtrl: NavController,public http: Http) {
  // 	http.get('https://www.aformac-vichy-app7.ovh/api/user?api_token=OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV')
  //     .subscribe(data => { this.data = data.json()});
  // }


}