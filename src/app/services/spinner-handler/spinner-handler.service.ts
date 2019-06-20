import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerHandlerService {
  isLoading = false;

  constructor(public loadingCtrl: LoadingController) {
  }

  async presentLoadingCustom() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: null,
      message: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/logoComanda.gif" />
          </div>
        </div>`,
      duration: 5000
    }).then((res) => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('spinner dismissed'));
  }

  getAllPageSpinner() {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'small-spinner'
    });
    return loader;
  }

  getBigSpinner() {
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'big-spinner'
    });
    return loader;
  }

  presentLoadingCustom1() {
    let loading = this.loadingCtrl.create({
      spinner: null,
      message: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/logoComanda1.gif" />
          </div>
        </div>`,
      duration: 5000
    });

    //loading.present();
    return loading;
  }

}
