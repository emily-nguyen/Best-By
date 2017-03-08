import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase,} from 'angularfire2';
import firebase from 'firebase';
import { PantryPage } from '../pantry/pantry';


/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  userID: any;
  item: any;
  date: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController) {
    this.item = navParams.data.item;
    console.log(navParams.data.item);

    this.initializeDate();
    console.log(this.date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  public initializeDate() {
    this.userID = this.af.auth.getAuth().uid;

    firebase.database().ref('Users/'+this.userID+'/Pantry/'+this.item+'/expiration').once("value", (snap) => {
      this.date = snap.val();
      });
  }






  public deleteItem() {
    this.userID = this.af.auth.getAuth().uid;
    console.log('****',this.item);
    firebase.database().ref('Users/'+this.userID+'/Pantry/'+this.item+'/').update({deleted: true});
    this.navCtrl.setRoot(PantryPage);
    //this.navCtrl.insert(0, PantryPage, {direction: 'back'});
    //this.navCtrl.pop();
  }

}
