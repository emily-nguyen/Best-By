import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
