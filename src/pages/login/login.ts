import {Injectable} from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
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
  public message:string = '';

  private dataForm = {
    'email'    : null,
    'password' : null
  };

  constructor(private tsp: TokenServiceProvider, private navCtrl: NavController){
  }

  login() {
    this.tsp.login(this.dataForm.email, this.dataForm.password);
    this.redirect();
  }

  redirect() {
    if(this.tsp.getToken() != '') {
      this.navCtrl.setRoot(AccueilPage);
    }else{
      this.message = 'Erreur de connexion.'
    }
  }

}