import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { ImagesService } from 'src/app/services/fotos/images.service';
import { AuthFireService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.page.html',
  styleUrls: ['./alta-cliente.page.scss'],
})
export class AltaClientePage implements OnInit {

  usuario: any;
  cliente: Cliente;
  ocultarR: boolean = true;
  ocultarA: boolean = true;
  image: string = null;
  secondPass: string;


  constructor(private errorHandler: ToastService, private navCtrl: NavController,
    private barcodeScanner: BarcodeScanner, private imageService: ImagesService,
    private miHttp: ClienteService, private authFireService: AuthFireService) {
    this.cliente = new Cliente();
    this.limpiarCliente();
  }

  ngOnInit() {
  }

  registradoClick() {
    this.limpiarCliente();
    this.ocultarR = false;
    this.ocultarA = false;
    this.cliente.tipo = "registrado";
  }

  anonimoClick() {
    this.limpiarCliente();
    this.ocultarR = true;
    this.ocultarA = false;
    this.cliente.tipo = "anonimo";
  }


  validarF(tipo: string) {
    switch (tipo) {
      case "registrado": {
        if (this.cliente.nombre != "" && this.cliente.apellido != "" && this.cliente.mail != "" && this.cliente.dni != null && this.cliente.pass != "" && this.secondPass != "") {
          if (this.cliente.pass == this.secondPass) {
            if (this.cliente.pass.length > 5) {
              return true;
            }
            this.errorHandler.errorToast("La contraseña es muy corta");

          } else {
            this.errorHandler.errorToast("Las contraseñas son diferentes");

          }
        } else {
          this.errorHandler.errorToast("Debe completar todos los campos");

        }
        return false;
        break;
      }
      case "anonimo": {
        if (this.cliente.nombre != "" && this.cliente.usuario != "" && this.cliente.pass != "" && this.secondPass != "") {
          if (this.cliente.pass == this.secondPass) {
            if (this.cliente.pass.length > 5) {
              return true;
            }
            this.errorHandler.errorToast("La contraseña es muy corta");

          } else {
            this.errorHandler.errorToast("Las contraseñas son diferentes");

          }
        } else {
          this.errorHandler.errorToast("Debe completar todos los campos");

        }
        return false;

        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }


  limpiarCliente() {
    this.cliente.nombre = "";
    this.cliente.apellido = "";
    this.cliente.dni = null;
    this.cliente.mail = "";
    this.cliente.pass = "";
    this.secondPass = "";
    this.cliente.usuario = "";
  }



  registrarCliente() {
    if (this.validarF(this.cliente.tipo)) {
      this.miHttp.alta(this.cliente)
        .subscribe(response => {
          if (response['Estado'] === 'OK') {
            this.authFireService.Registrar(this.cliente.usuario + '@hotmail.com', '123456').
              then(res => {
                this.limpiarCliente();
                this.errorHandler.confirmationToast("Se dio de alta correctamente el cliente");
              })
              .catch(error => {
                this.errorHandler.errorToast(error);
              });
          } else {
            this.errorHandler.errorToast(response['Mensaje']);
          }
        }),
        (error) => {
          this.errorHandler.errorToast("Se produjo un error al ingresar");
        }
    }
  }

  cancel() {
    this.navCtrl.navigateForward('/home');
  }

  volver() {
    this.navCtrl.navigateForward('inicioCliente');
  }

  leer() {
    this.barcodeScanner.scan({ "formats": "PDF_417" }).then(barcodeData => {
      //this.errorHandler.confirmationToast(barcodeData.text);
      this.cargarDatosDni(barcodeData);
    }).catch(err => {
    });
  }

  cargarDatosDni(datos: any) {
    let parsedData = datos.text.split('@');
    let nombre = parsedData[2].toString();
    let apellido = parsedData[1].toString();
    let dni: number = +parsedData[4];

    this.cliente.apellido = apellido;
    this.cliente.nombre = nombre;
    this.cliente.dni = dni;
  }
  getPicture() {
    this.imageService.takePhoto()
      .then(res => {
        if (res !== 'No Image Selected') {
          this.cliente.foto = 'data:image/jpg;base64,' + res;
        }
        else {
          this.errorHandler.errorToast('No tomó la foto.');
        }
      })
      .catch(error => {
        this.errorHandler.errorToast('Error: No se ha podido cargar la foto. ' + error.message);

      });

  }
}
