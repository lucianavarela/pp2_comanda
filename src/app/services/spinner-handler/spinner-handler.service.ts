import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerHandlerService {

  constructor(public loadingCtrl: LoadingController) {   
     
  }

  presentLoadingCustom() {       
    this.loadingCtrl.getTop().then(spinner => {
      console.log("spinner present");
      if (spinner) {
        spinner.present();
      }
      else {
        this.loadingCtrl.create({
          spinner: null,
          message: `
            <div class="custom-spinner-container">
              <div class="custom-spinner-box">
                 <img src="assets/imgs/logoComanda.gif" />
              </div>
            </div>`
        });  
      }
    });
  }

  dismiss() {
    this.loadingCtrl.getTop().then(spinner => {
      console.log("spinner dismiss");
      if(spinner) {
        spinner.dismiss();
      }
    });
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
