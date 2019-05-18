import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpinnerHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerHandlerProvider {

  
  constructor(public loadingCtrl: LoadingController){
  }

  getAllPageSpinner(){
      let loader = this.loadingCtrl.create({
          spinner:'bubbles',
          showBackdrop:false,
          cssClass: 'small-spinner'
        });
      return loader;
  }

  getBigSpinner(){
      let loader = this.loadingCtrl.create({
          spinner:'bubbles',
          showBackdrop:false,
          cssClass: 'big-spinner'
        });
      return loader;
  }


  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/logoComanda.gif" />
          </div>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    //loading.present();
    return loading;
  }

  presentLoadingCustom1() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/logoComanda1.gif" />
          </div>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    //loading.present();
    return loading;
  }


}
