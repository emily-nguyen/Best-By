import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { PantryPage } from '../pantry/pantry';
import {FIREBASE_PROVIDERS, defaultFirebase,} from 'angularfire2';
import firebase from 'firebase';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  userID: any;

  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire) {}



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public register() {
    //console.log("came to logi");
    console.log(this.registerCredentials);

    this.navCtrl.push(PantryPage);
  }


}
