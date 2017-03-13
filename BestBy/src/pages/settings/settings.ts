import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
import { PantryPage } from '../pantry/pantry';


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

  orderItems: any;
  sortItems: any;
  userID: any;

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {
    this.userID = this.af.auth.getAuth().uid;

    firebase.database().ref('Users/'+this.userID+'/Setting/orderBy').once("value", (snap) => {
      this.orderItems = snap.val();
    });

    firebase.database().ref('Users/'+this.userID+'/Setting/sortBy').once("value", (snap) => {
      this.sortItems = snap.val();
    });

    console.log(this.orderItems);
    console.log(this.sortItems);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }




  public saveSetting() {
    firebase.database().ref('Users/'+this.userID+'/Setting').set({orderBy: this.orderItems, sortBy: this.sortItems});
    console.log(this.orderItems);
    console.log(this.sortItems);

    this.navCtrl.setRoot(PantryPage);
  }






}
