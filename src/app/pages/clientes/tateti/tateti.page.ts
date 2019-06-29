import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';

export class JuegoTaTeTi {
  spot1: string = '';
  spot2: string = '';
  spot3: string = '';
  spot4: string = '';
  spot5: string = '';
  spot6: string = '';
  spot7: string = '';
  spot8: string = '';
  spot9: string = '';
  gano: boolean = false;

  constructor() {
  }

  public botPlays() {
    let continuar = true;
    do {
      let position = Math.floor((Math.random() * 9) + 1);
      if (position == 1 && this.spot1 == '') {
        this.spot1 = 'circle';
        continuar = false;
      } else if (position == 2 && this.spot2 == '') {
        this.spot2 = 'circle';
        continuar = false;
      } else if (position == 3 && this.spot3 == '') {
        this.spot3 = 'circle';
        continuar = false;
      } else if (position == 4 && this.spot4 == '') {
        this.spot4 = 'circle';
        continuar = false;
      } else if (position == 5 && this.spot5 == '') {
        this.spot5 = 'circle';
        continuar = false;
      } else if (position == 6 && this.spot6 == '') {
        this.spot6 = 'circle';
        continuar = false;
      } else if (position == 7 && this.spot7 == '') {
        this.spot7 = 'circle';
        continuar = false;
      } else if (position == 8 && this.spot8 == '') {
        this.spot8 = 'circle';
        continuar = false;
      } else if (position == 9 && this.spot9 == '') {
        this.spot9 = 'circle';
        continuar = false;
      }
    } while (continuar);
  }

  public verificar() {
    let is_over = false;
    if (this.spot1 == this.spot4 && this.spot4 == this.spot7 && this.spot7 != '') {
      this.gano = this.spot1 == 'cross';
      is_over = true;
    } else if (this.spot2 == this.spot5 && this.spot5 == this.spot8 && this.spot8 != '') {
      this.gano = this.spot2 == 'cross';
      is_over = true;
    } else if (this.spot3 == this.spot6 && this.spot6 == this.spot9 && this.spot9 != '') {
      this.gano = this.spot3 == 'cross';
      is_over = true;
    } else if (this.spot1 == this.spot5 && this.spot5 == this.spot9 && this.spot9 != '') {
      this.gano = this.spot1 == 'cross';
      is_over = true;
    } else if (this.spot3 == this.spot5 && this.spot5 == this.spot7 && this.spot7 != '') {
      this.gano = this.spot3 == 'cross';
      is_over = true;
    } else if (this.spot1 == this.spot2 && this.spot2 == this.spot3 && this.spot3 != '') {
      this.gano = this.spot1 == 'cross';
      is_over = true;
    } else if (this.spot4 == this.spot5 && this.spot5 == this.spot6 && this.spot6 != '') {
      this.gano = this.spot4 == 'cross';
      is_over = true;
    } else if (this.spot7 == this.spot8 && this.spot8 == this.spot9 && this.spot9 != '') {
      this.gano = this.spot7 == 'cross';
      is_over = true;
    } else if (this.spot1 != '' && this.spot2 != '' && this.spot3 != '' && this.spot4 != '' &&
      this.spot5 != '' && this.spot6 != '' && this.spot7 != '' && this.spot8 != '' && this.spot9 != '') {
      this.gano = false;
      is_over = true;
    }
    return is_over;
  }

  public reset() {
    this.gano = false;
    this.spot1 = '';
    this.spot2 = '';
    this.spot3 = '';
    this.spot4 = '';
    this.spot5 = '';
    this.spot6 = '';
    this.spot7 = '';
    this.spot8 = '';
    this.spot9 = '';
  }
}

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.page.html',
  styleUrls: ['./tateti.page.scss'],
})
export class TatetiPage {
  nuevoJuego: JuegoTaTeTi;
  isEnd: boolean = false;
  thinking: boolean = false;

  constructor(public navCtrl: NavController, private errorHandler: ErrorHandlerService) {
    this.nuevoJuego = new JuegoTaTeTi();
  }

  play(position: string) {
    if (!this.isEnd && this.nuevoJuego.gano != null && !this.thinking) {
      let moveDone = false;
      if (position == '1' && this.nuevoJuego.spot1 == '') {
        this.nuevoJuego.spot1 = 'cross';
        moveDone = true;
      } else if (position == '2' && this.nuevoJuego.spot2 == '') {
        this.nuevoJuego.spot2 = 'cross';
        moveDone = true;
      } else if (position == '3' && this.nuevoJuego.spot3 == '') {
        this.nuevoJuego.spot3 = 'cross';
        moveDone = true;
      } else if (position == '4' && this.nuevoJuego.spot4 == '') {
        this.nuevoJuego.spot4 = 'cross';
        moveDone = true;
      } else if (position == '5' && this.nuevoJuego.spot5 == '') {
        this.nuevoJuego.spot5 = 'cross';
        moveDone = true;
      } else if (position == '6' && this.nuevoJuego.spot6 == '') {
        this.nuevoJuego.spot6 = 'cross';
        moveDone = true;
      } else if (position == '7' && this.nuevoJuego.spot7 == '') {
        this.nuevoJuego.spot7 = 'cross';
        moveDone = true;
      } else if (position == '8' && this.nuevoJuego.spot8 == '') {
        this.nuevoJuego.spot8 = 'cross';
        moveDone = true;
      } else if (position == '9' && this.nuevoJuego.spot9 == '') {
        this.nuevoJuego.spot9 = 'cross';
        moveDone = true;
      }
      if (moveDone) {
        this.verificar();
        if (!this.isEnd) {
          this.thinking = true;
          let that = this;
          let time = Math.floor((Math.random() * 1000) + 100);
          setTimeout(function () {
            that.thinking = false;
            that.nuevoJuego.botPlays();
            that.verificar();
          }, time);
        }
      }
    }
  }

  verificar() {
    this.isEnd = this.nuevoJuego.verificar();
    if (this.isEnd) {
      if (this.nuevoJuego.gano) {
        this.errorHandler.mostrarMensajeConfimación('Ganaste 10% de descuento');
        this.navCtrl.navigateForward('home');
      }
    }
  }

  ngOnInit() {
  }

  atras() {
    this.navCtrl.navigateForward('home')
  }
}
