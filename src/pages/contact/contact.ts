import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

//   ngOnInit(): void {
//   this.heroForm = new FormGroup({
//     'name': new FormControl(this.contact.name, [
//       Validators.required,
//       Validators.minLength(4),
//       forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
//     ]),
//     'alterEgo': new FormControl(this.contact.alterEgo),
//     'power': new FormControl(this.contact.power, Validators.required)
//   });
// }

// get name() { return this.contactForm.get('name'); }

// get power() { return this.contactForm.get('power'); }

}
