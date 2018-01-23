import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MessageServiceProvider } from '../../providers/message-service/message-service';
import { TokenServiceProvider } from '../../providers/token-service/token-service';

// import { MyApp } from '../../app/app.component';
import { AccueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  private data:{};

  private dataForm = {};

  private token:string;

  constructor(public navCtrl: NavController, public http: Http, private messageService: MessageServiceProvider, private tokenService: TokenServiceProvider) {
  	this.getMessages();

     http.get('https://www.aformac-vichy-app7.ovh/api/data?email='+this.dataForm['email']+"&password="+this.dataForm['password'])
    .subscribe(data => { this.data = data.json()});
    
    this.token = tokenService.getToken();
  }

  getData(){
    return this.data;
  }

  getMessages(){
  	this.messageService.getMessages().subscribe(data => { this.data = data.json()});
  }

  login(email: string, password: string){

  	 if (this.data[0]['email'] == this.dataForm['email']) {
       console.log('email OK');
     }

  }

  logForm() {
    //console.log(this.data);
    //console.log("https:/www.aformac-vichy-app7.ovh/api/data?email="+this.dataForm['email']+"&password="+this.dataForm['password']);
    //http.get('https://www.aformac-vichy-app7.ovh/api/data?email='+this.dataForm['email']+"&password="+this.dataForm['password'])
    //.subscribe(data => { this.data = data.json()});
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