import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  // private data:{};

  // constructor(public navCtrl: NavController, private messageService: MessageServiceProvider) {
  // 	this.getMessages();
  // }

  // getMessages(){
  // 	this.messageService.getMessages().subscribe(data => { this.data = data.json()});
  // }

  // login(user: string, password: string){
  	 
  // }

  private data = '';

  constructor(public navCtrl: NavController,public http: Http) {
  	http.get('https://www.aformac-vichy-app7.ovh/api/user?api_token=OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV')
      .subscribe(data => { this.data = data.json()});
  }


}