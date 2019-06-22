import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.page.html',
  styleUrls: ['./ahorcado.page.scss'],
})
export class AhorcadoPage implements OnInit {

  usuario: User;

  letra: string = '';
  nombres: any = ['COCHE', 'MOTO', 'CARTEL', 'COCHECITO', 'RAQUETA'];
  nombreSecreto: any = this.palabraAleatoria(0, (this.nombres.length - 1));
  palabra: any = '';
  muestraHuecos: any = this.muestraHuecosPalabra();
  mensaje: string = 'Selecciona una letra del listado.';
  vidas: number = 5;
  puntos: number = 0;
  ganador: number = 0;
  controlLetras = new Array;

  constructor(public navCtrl: NavController,private toasterService: ToastService) { }

  ngOnInit() {
  }


  volver(){
    this.navCtrl.navigateForward('home');
  }


   // Método que genera una palabra aleatoria comprendida en el array nombres.	
   public palabraAleatoria(primer, ultimo) {
    let numberOfName = Math.round(Math.random() * (ultimo - primer) + (primer));
    return this.nombres[numberOfName];
  }

  // Método que valida la letra seleccionada.	
  public compruebaLetra() {
    // Formateamos a mayúsculas para mejorar la legibilidad.
    let letraMayusculas = this.letra.toUpperCase();
    
    // Si se ha seleccionado una letra...		
    if (letraMayusculas) {

        if (this.nombreSecreto.indexOf(letraMayusculas) != -1) {

          let nombreSecretoModificado = this.nombreSecreto;
          let posicion = new Array;
          let posicionTotal = 0;

          let contador = 1;
          while (nombreSecretoModificado.indexOf(letraMayusculas) != -1) {
              
            posicion[contador] = nombreSecretoModificado.indexOf(letraMayusculas);
            nombreSecretoModificado = nombreSecretoModificado.substring(nombreSecretoModificado.indexOf(letraMayusculas) + letraMayusculas.length, nombreSecretoModificado.length);

            // Calculamos la posición total.
            if (contador > 1) {
              posicionTotal = posicionTotal + posicion[contador] + 1;
            }
            else { 
              posicionTotal = posicionTotal + posicion[contador];
            }

            this.palabra[posicionTotal] = letraMayusculas;
            this.mensaje = 'Genial, la letra ' + letraMayusculas + ' está en la palabra secreta.';
            this.toasterService.confirmationToast(this.mensaje);

            // Sumamos puntos
            if (this.controlLetras.indexOf(letraMayusculas) == -1) {
                this.puntos = this.puntos + 10;
            }
            else { 
                this.mensaje = 'La letra ' + letraMayusculas + ' fue seleccionada anteriormente.';
                this.toasterService.errorToast(this.mensaje);
            }

            contador++;
          }

          // Si ya no quedan huecos, mustramos el mensaje para el ganador.
          if (this.palabra.indexOf('_') == -1) { 

            // Sumamos puntos
            if (this.controlLetras.indexOf(letraMayusculas) == -1) {
              this.puntos = this.puntos + 50;
            }

            // Damos el juego por finalizado, el jugador gana.
            this.finDelJuego('gana')					
          }
        }
      else {
        // Restamos una vida.
        this.nuevoFallo();

        // Comprobamos si nos queda alguna vida.
        if (this.vidas > 0) {
          
          // Restamos puntos siempre y cuando no sean 0.
          if (this.puntos > 0) { 
            if (this.controlLetras.indexOf(letraMayusculas) == -1) {
              this.puntos = this.puntos - 5;
            }
          }

          // Mostramos un mensaje indicando el fallo.					
          this.mensaje = 'Fallo, la letra ' + letraMayusculas + ' no está en la palabra secreta, recuerda que te quedan ' + this.vidas + ' vidas.';
          this.toasterService.errorToast(this.mensaje);
        }
        else { 
          // Damos el juego por finalizado, el jugador pierde.
          this.finDelJuego('pierde')
        }
      }

      // La añadimos al array de letras seleccionadas.
			this.controlLetras.push(letraMayusculas);

    }
    else {
      this.mensaje = 'Seleccione una letra del listado.';
      this.toasterService.errorToast(this.mensaje);
    }
  }

  public muestraHuecosPalabra() {
    let totalHuecos = this.nombreSecreto.length;

    // Declaramos la variable huecos como nuevo array.		
    let huecos = new Array;
    for (let i = 0; i < totalHuecos; i++) {
      //Asignamos tantos huecos como letras tenga la palabra.
      huecos.push('_');
    }

    // Para empezar formamos la variable palabra tan solo con los huecos, ya que en este momento aún no se ha seleccionado ninguna letra.	
    this.palabra = huecos;
    return this.palabra;
  }

  public nuevoFallo() {
    this.vidas = this.vidas - 1;
    return this.vidas;
  }

  public finDelJuego(valor) { 
    // Perdedor
    if (valor == 'pierde') { 
	    // Mostramos el mensaje como que el juego ha terminado
	    this.mensaje = 'Perdiste!, Inténtalo de nuevo. Has conseguido un total de ' + this.puntos + ' puntos. La palabra secreta es ' + this.nombreSecreto;
      this.toasterService.errorToast(this.mensaje);
    }

    // Ganador
    if (valor == 'gana') { 
      this.mensaje = 'Te Ganaste un Postre Gratis!, Has acertado la palabra secreta. Has conseguido un total de ' + this.puntos + ' puntos.';
      this.toasterService.confirmationToast(this.mensaje);
      this.ganador = 1;
    }		
  }

  public reiniciaJuego() { 
    this.letra = '';
    this.palabra = '';
    this.vidas = 5;
    this.mensaje = '';
    this.ganador = 0;
    this.puntos = 0;
    this.nombreSecreto = this.palabraAleatoria(0, (this.nombres.length-1));
    this.muestraHuecos = this.muestraHuecosPalabra();
}



}
