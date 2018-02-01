// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';//
import { Injectable } from '@angular/core';

@Injectable()
export class TokenServiceProvider {

	private static arr: Object = { 
		'token': null,
		'admin': 0
	};

	private static url: string = 'https://www.aformac-vichy-app7.ovh/api/data';
	  
	constructor(private http:Http) {

  	}

  	// getToken() { 
  	// 	return TokenServiceProvider.arr.token;
  	// }

  	// getRole() { 
  	// 	return TokenServiceProvider.arr.admin;
  	// }
 
  	login(email:string, password:string){
  		let body = JSON.stringify({"email": email, "password": password});
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    headers.append('Access-Control-Allow-Origin','*');
	    //this.http.post(TokenServiceProvider.url+"?email="+email+"&password="+password, body, {headers: Headers})
	    return new Promise(resolve => {
	        this.http.post(TokenServiceProvider.url+"?email="+email+"&password="+password, body)
	            .subscribe(response => TokenServiceProvider.arr = response["_body"]);//response._body (old version)
	    });

  	}
}