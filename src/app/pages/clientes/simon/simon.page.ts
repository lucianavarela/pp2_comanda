import { Component, OnInit } from '@angular/core';
import { Colores } from 'src/app/models/colores';
import { SmartAudioService } from 'src/app/services/smart-audio/smart-audio.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { ToastService } from 'src/app/services/toast/toast.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.page.html',
  styleUrls: ['./simon.page.scss'],
})

export class SimonPage implements OnInit {
  color: Colores;
  numeroVidas: number;
  estado: EstadosSimon;
  secuenciaTxt: string;
  dificultad: DificultadSimon;
  coloresJuego: Colores[] = [
    Colores.Rojo,
    Colores.Verde,
    Colores.Azul
  ];
  secuencia: Colores[];
  nroIngreso: number;
  mensaje: string;
  secuenciaElegida: string;
  usuarioOnline: User; 

  constructor(private smartAudioService: SmartAudioService,public navCtrl: NavController,
    private authService: AuthService, private  clienteService: ClienteService,private toastService : ToastService,
    private vibrationService: Vibration) {
    this.reiniciar();
  }

  ngOnInit() {
  }

  private reiniciar() {
    this.color = Colores.Blanco;
    this.numeroVidas = 3;
    this.dificultad = DificultadSimon.Facil;
    this.secuencia = Array<Colores>();
    this.secuenciaElegida = "";
    this.estado = EstadosSimon.NoJugando;
    this.mensaje = "";
  }

  public btnReiniciarOnClick() {
    this.reiniciar();
  }

  private async armarSecuencia() {
    this.secuencia = Array<Colores>();
    this.secuenciaElegida = "";
    this.mensaje = "";

    for (var i = 1; i <= this.dificultad; i++) {
      let randomColorIndex: number = Math.floor(Math.random() * 3) + 0;
      let color: Colores = this.coloresJuego[randomColorIndex];
      this.secuenciaTxt = i + " - " + this.getColorDescription(color);
      this.secuencia.push(color);
      this.color = color;
      this.smartAudioService.play('success');

      await this.sleep(2000);
    }
    this.secuenciaTxt = "";
    this.color = Colores.Blanco;
    this.nroIngreso = 0;
  }

  private getColorDescription(color: Colores): string {
    let colorText: string;
    switch (color) {
      case Colores.Rojo:
        colorText = "Rojo";
        break;

      case Colores.Verde:
        colorText = "Verde";
        break;

      case Colores.Azul:
        colorText = "Azul";
        break;
    }

    return colorText;
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public btnRedOnClick() {
    this.color = Colores.Rojo;
    this.evaluarJuego();
  }

  public btnGreenOnClick() {
    this.color = Colores.Verde;
    this.evaluarJuego();
  }

  public btnBlueOnClick() {
    this.color = Colores.Azul;
    this.evaluarJuego();
  }

  private evaluarJuego() {
    if (this.secuencia[this.nroIngreso] == this.color) {
      this.smartAudioService.play('success');
      this.secuenciaElegida += " " + this.getColorDescription(this.color);
      this.mensaje = "¡BIEN!";
      this.nroIngreso++;
    }
    else {
      this.smartAudioService.play('error');
      this.vibrationService.vibrate(1000);
      this.numeroVidas--;
      this.mensaje = "¡LE ERRASTE!";
    }

    if (this.numeroVidas == 0) {
      this.mensaje = "PERDISTE. Puedes reiniciar el juego para volver a intentarlo.";
    }
    else {
      if (this.nroIngreso == this.dificultad) {
        this.pasarDeNivel();
      }
    }
  }

  public obtenerDescripcionDificultad(): string {
    switch (this.dificultad) {
      case DificultadSimon.Facil:
        return "Fácil";
      case DificultadSimon.Medio:
        return "Medio";
      case DificultadSimon.Dificil:
        return "Difícil";
    }
  }

  private pasarDeNivel() {    
    this.secuenciaElegida = "";
    this.color = Colores.Blanco;
    this.estado = EstadosSimon.NoJugando;
    switch(this.dificultad) {
      case DificultadSimon.Facil:        
        this.mensaje = "¡PASASTE DE NIVEL!";
        this.dificultad = DificultadSimon.Medio;
        this.numeroVidas = 3;
      break;
      case DificultadSimon.Medio:        
        this.mensaje = "¡PASASTE DE NIVEL!";
        this.dificultad =  DificultadSimon.Dificil;        
        this.numeroVidas = 3;        
      break;
      case DificultadSimon.Dificil:
        this.mensaje = "¡GANASTE UNA BEBIDA GRATIS!";
        let cliente : Cliente = new Cliente();
      cliente.id = this.usuarioOnline.id;
      cliente.descuento = "simon";
     
     this.clienteService.CargarDescuento(cliente).
        subscribe((data) => {
          this.toastService.confirmationToast(data["Mensaje"]);
          //this.volver();
          
        }, (error) => {
          this.toastService.errorToast(error);
          
        });
       // this.volver();
        this.estado = EstadosSimon.Finalizado;
      break;
    }

  }


  volver(){
    this.navCtrl.navigateForward('/home');
  }

  public async btnJugarOnClick() {
    this.estado = EstadosSimon.ArmandoSecuencia;
    await this.armarSecuencia();
    this.estado = EstadosSimon.Jugando;
  }
}

export enum EstadosSimon {
  Jugando = "Jugando",
  ArmandoSecuencia = "Armando Secuencia",
  NoJugando = "No Jugando",
  Finalizado = "Finalizado"
}

export enum DificultadSimon {
  Facil = 5,
  Medio = 6,
  Dificil = 7
}