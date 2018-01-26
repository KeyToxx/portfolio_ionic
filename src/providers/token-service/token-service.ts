import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';//
import { Injectable } from '@angular/core';

@Injectable()
export class TokenServiceProvider {
	private static token: string = '';
	private static url: string = 'https://www.aformac-vichy-app7.ovh/api/data';
	  
	constructor(private http:Http) {
    	//console.log('Hello MessageServiceProvider Provider');
  	}

  	getToken() { 
  		return TokenServiceProvider.token;
  	}

  	login(email:string, password:string){
  		let body = JSON.stringify({"email": email, "password": password});
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    headers.append('Access-Control-Allow-Origin','*');
	    return new Promise(resolve => {
	        this.http.post(TokenServiceProvider.url+"?email="+email+"&password="+password, body, {headers: headers})
	            .subscribe(response => TokenServiceProvider.token = response._body);
	    });

  	}
}