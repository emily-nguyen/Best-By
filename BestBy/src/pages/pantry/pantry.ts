import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
import { AddItemPage } from '../add-item/add-item';
import { LoginPage } from '../login/login';

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

  afire: any;

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {

    this.userID = this.af.auth.getAuth().uid;
    //firebase.database().ref('Users/'+this.userID+'/New/').set({newUser: true});
    this.afire = af;
    //this.pantryItems = this.af.database.list('/Users/'+this.userID);
    //console.log(this.pantryItems);

    /*
    af.database.list('Users/'+this.userID, { preserveSnapshot: true })
      .subscribe(snapshots=> {
        snapshots.forEach(snapshot=> {
          this.pantryList.push(snapshot.val());
        });
      });
      */

    this.initializeItems();

    /*
    var ref = firebase.database().ref('Users/'+this.userID)
    ref.on("value", function(snap) {
      console.log(snap.numChildren());

      console.log(snap.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }); */


  }

  public initializeItems() {

    this.pantryItems = [];
    this.afire.database.list('/Users/'+this.userID +'/Pantry', { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.pantryItems.push(snapshot.key);
        });
      });

    console.log(this.pantryItems);
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


  public toLogout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
