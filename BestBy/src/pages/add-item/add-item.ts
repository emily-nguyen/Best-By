import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase,} from 'angularfire2';
import firebase from 'firebase';
import { PantryPage } from '../pantry/pantry';

/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  userID: any;
  //registerCredentials = {email: '', password: ''};
  item: any;
  date: any;

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  public addItemToPantry() {

    //this.af.auth.createUser(this.registerCredentials);
    this.userID = this.af.auth.getAuth().uid;
    firebase.database().ref('Users/'+this.userID+'/'+this.item+'/').set({expiration: this.date});
    this.navCtrl.setRoot(PantryPage);
    //this.navCtrl.insert(0, PantryPage, {direction: 'back'});
    //this.navCtrl.pop();
  }

}
