import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
import { AddItemPage } from '../add-item/add-item';
import { LoginPage } from '../login/login';
import { ItemPage } from '../item/item';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the Pantry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pantry',
  templateUrl: 'pantry.html'
})
export class PantryPage {

  userID: any;
  searchQuery: string = '';
  //pantryItems: FirebaseListObservable<any>;
  pantryList: string[] = [];
  pantryItems: string[] = [];
  accepted: boolean;
  afire: any;
  snapshot: any;

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {

    this.userID = this.af.auth.getAuth().uid;
    this.afire = af;
    this.initializeItems();
  }

  public initializeItems() {

    this.pantryItems = [];
    this.afire.database.list('/Users/' + this.userID + '/Pantry', {preserveSnapshot: true})
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          //console.log("***", snapshot.child("deleted").key);


           firebase.database().ref('Users/'+this.userID+'/Pantry/'+snapshot.key+'/deleted').once("value", (snap) => {

             if (snap.val() == false) {
               this.accepted = true;
               /*
               console.log("here");
               //console.log(snapshot.key);
               this.pantryItems.push(snapshot.key);
               console.log("UGHUGHUGHGHKSLDFH");
               */
             }
           });
           if (this.accepted) {
             this.pantryItems.push(snapshot.key);
           }
           this.accepted = false;

        });


        console.log(this.pantryItems);


      });
  }

  getItems(ev: any,) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pantryItems = this.pantryItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
  }

  public toAddItem(){
    this.navCtrl.push(AddItemPage);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemPage,{item:item});
  }

  public toLogout() {
    this.navCtrl.setRoot(LoginPage);
  }

  public toSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
