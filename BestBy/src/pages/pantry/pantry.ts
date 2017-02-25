import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
import { AddItemPage } from '../add-item/add-item';

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
  //pantryItems: FirebaseListObservable<any>;
  pantryList: string[] = [];
  pantryItems: string[] = [];

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {

    this.userID = this.af.auth.getAuth().uid;
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

    this.pantryItems = [];
    af.database.list('/Users/'+this.userID, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.pantryItems.push(snapshot.key);
        });
      });

    console.log(this.pantryItems);


    /*
    var ref = firebase.database().ref('Users/'+this.userID)
    ref.on("value", function(snap) {
      console.log(snap.numChildren());

      console.log(snap.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }); */


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
  }

  public toAddItem(){
    this.navCtrl.push(AddItemPage);
  }

}
