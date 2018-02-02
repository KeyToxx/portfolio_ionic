import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-competences',
  templateUrl: 'competences.html'
})
export class CompetencesPage {

	private data = '';

  constructor(public navCtrl: NavController,public http: Http) {
  	http.get('https://www.aformac-vichy-app7.ovh/api/skill?api_token=R3gMQ48YL1h6P40cqGgLO5vvQcPY0CNgO3BitO39g9ni5PTjyEZ3a9vwXpyx')
      .subscribe(data => { this.data = data.json()});
  }

}
