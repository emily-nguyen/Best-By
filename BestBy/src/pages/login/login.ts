
import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { NavController, AlertController } from 'ionic-angular';
import { PantryPage } from '../pantry/pantry';
import { RegisterPage } from '../register/register';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login(){
    this.af.auth.login(this.registerCredentials,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then(
      (success) => {
        console.log(success);
        this.navCtrl.setRoot(PantryPage);
      }).catch(
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Something is wrong!',
          subTitle: err.message,
          buttons: ['OK']
        });
        alert.present();

        console.log(err);
      })
  }

  public register(){

    this.navCtrl.push(RegisterPage);


  }

}
