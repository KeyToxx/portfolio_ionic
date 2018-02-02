import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{

	msgContact: FormGroup;

	// private contact:Object = {
	// 	'name': null,
	// 	'email': null,
	// 	'sujet': null,
	// 	'message': null
	// };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public loadingCtrl: LoadingController, private formCtc: FormBuilder,public http: Http) {

  }

    ngOnInit() {

       this.msgContact = this.formCtc.group({

            name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),

            mail: new FormControl('', [Validators.required, Validators.email]),

            sujet: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),

            message: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(500)])

        });



    }

    onSubmit(){ 

        let loading = this.loadingCtrl.create({

            content: "Chargement ..."

    	  });

        loading.present(); 

     	// console.log(JSON.stringify(this.msgContact.value));

        this.http.post('https://www.aformac-vichy-app7.ovh/api/contact?api_token=TeaTyFS98mGpNfb4T6UHGCVwD9hNHDNia12n5XZGH21rMirkfS6eQEW7QJRV', JSON.stringify(this.msgContact.value)).subscribe(

            data => {

            	console.log(data);

                let alertSuccess = this.alertCtrl.create({

                    title: 'Message envoyé !',

                    subTitle: 'Merci d\'avoir pris le temps de m\'écrire.'+'<br><br>'+'Je répondrai à ce message dans les plus bref délais.',

                    buttons: ['OK']

                });



                this.msgContact.reset();

                loading.dismiss();

                alertSuccess.present();



            },

            error => {

            	console.log(error);

                let alertSuccess = this.alertCtrl.create({

                    title: 'Oops !',

                    subTitle: 'Il semblerait qu\'un problème soit survenu lors de l\'envoi. Veuillez réessayer ultérieurement ou me contacter directement à kozluk.pierre(at)gmail(dot)com.',

                    buttons: ['OK']

                });

                loading.dismiss();

                alertSuccess.present();

            }

        );

    }


}
