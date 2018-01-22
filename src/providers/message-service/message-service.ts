import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';//
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';//
import 'rxjs/add/operator/do';//
import { TokenServiceProvider } from '../token-service/token-service';
/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {

private url: string = "https://www.aformac-vichy-app7.ovh/api/user?api_token=";
private token: string;

  constructor(private http: Http, private tokenService: TokenServiceProvider) {
    //console.log('Hello MessageServiceProvider Provider');
    this.token = tokenService.getToken();
  }

  getMessages(){
  	return this.http.get(this.url+this.token)
  	.do(res => console.log(res));
  }

}
