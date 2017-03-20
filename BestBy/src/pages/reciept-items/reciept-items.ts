import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase,} from 'angularfire2';
import firebase from 'firebase';
import { PantryPage } from '../pantry/pantry';

/*
  Generated class for the RecieptItems page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reciept-items',
  templateUrl: 'reciept-items.html'
})
export class RecieptItemsPage {

  items: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController) {
    this.items = navParams.data.item;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecieptItemsPage');
  }

}
