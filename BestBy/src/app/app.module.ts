import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { PantryPage } from '../pages/pantry/pantry';
import { RegisterPage } from '../pages/register/register';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemPage } from '../pages/item/item';
import { SettingsPage } from '../pages/settings/settings';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAGNuDsM-j6vqmpxewCpsaKxwiX0G6Wlt0",
    authDomain: "best-by.firebaseapp.com",
    databaseURL: "https://best-by.firebaseio.com",
    storageBucket: "best-by.appspot.com",
    messagingSenderId: "309382011330"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    PantryPage,
    AddItemPage,
    ItemPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    PantryPage,
    AddItemPage,
    ItemPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
