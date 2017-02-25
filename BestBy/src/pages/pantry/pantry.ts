import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantryPage');
  }

  public toAddItem(){

    this.navCtrl.push(AddItemPage);


  }


}
