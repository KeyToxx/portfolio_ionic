import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class SkillPage {

	private data = '';

  constructor(public navCtrl: NavController,public http: Http) {
  	http.get('https://www.aformac-vichy-app7.ovh/api/skill?api_token=OmrTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV')
      .subscribe(data => { this.data = data.json()});
  }

}
