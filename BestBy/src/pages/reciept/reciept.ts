import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController, LoadingController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import {RecieptItemsPage} from "../reciept-items/reciept-items";

/*
  Generated class for the Reciept page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reciept',
  templateUrl: 'reciept.html'
})
export class RecieptPage {

  srcImage: string;
  OCRAD: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,

  public actionSheetCtrl: ActionSheetController,
  public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecieptPage');
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Choose Photo',
          handler: () => {
            this.getPicture(0); // 0 == Library
          }
        },{
          text: 'Take Photo',
          handler: () => {
            this.getPicture(1); // 1 == Camera
          }
        },{
          text: 'Demo Photo',
          handler: () => {
            this.srcImage = 'assets/img/demo.png';
          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getPicture(sourceType: number) {
    // You can check the values here:
    // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
    Camera.getPicture({
      quality: 100,
      destinationType: 0, // DATA_URL
      sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.srcImage = `data:image/jpeg;base64,${imageData}`;
    }, (err) => {
      console.log(`ERROR -> ${JSON.stringify(err)}`);
    });
  }

  analyze() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loader.present();
    (<any>window).OCRAD(document.getElementById('image'), text => {
      loader.dismissAll();
      this.navCtrl.push(RecieptItemsPage, {items: text.split("\n")});
      console.log(text.split("\n"));
    });
  }

  restart() {
    this.srcImage = '';
    this.presentActionSheet();
  }

}
