import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';//
import { Injectable } from '@angular/core';

@Injectable()
export class TokenServiceProvider {
	private token: string = 'OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV';//'OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV';

	constructor(private http: Http) {
    	//console.log('Hello MessageServiceProvider Provider');
  	}

  	getToken() { 
  		return this.token;
  	}

  	login(email:string, password:string){
  		this.token = 'OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV';
  	}
}