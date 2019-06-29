import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alta-socio',
  templateUrl: './alta-socio.page.html',
  styleUrls: ['./alta-socio.page.scss'],
})
export class AltaSocioPage implements OnInit {

  id_empleado = null;
  empleado: Empleado = null;
  myForm: FormGroup;

  constructor( public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public empleadoService: EmpleadoService,
    private errorHandler: ErrorHandlerService,
    private activatedRoute: ActivatedRoute) { }


  saveData() {
    if (this.id_empleado == null) {
      this.empleadoService.Registrar(this.myForm.value.usuario,
        this.myForm.value.passwordRetry.password,
        this.myForm.value.nombre,
        this.myForm.value.tipo)
        .then(response => {
          this.errorHandler.mostrarMensajeConfimación('Empleado creado')
          this.navCtrl.navigateForward('/empleados');
        })
        .catch(error => {
          this.errorHandler.mostrarMensajeError(error);
        })
    } else {
      this.empleadoService.Modificar(this.myForm.value.usuario,
        this.id_empleado,
        this.myForm.value.nombre,
        this.myForm.value.tipo)
        .then(response => {
          this.errorHandler.mostrarMensajeConfimación('Empleado creado')
          this.navCtrl.navigateForward('/empleados');
        })
        .catch(error => {
          this.errorHandler.mostrarMensajeError(error);
        })
    }
  }

  private createMyForm() {
    if (this.id_empleado == null) {
      return this.formBuilder.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        usuario: ['', Validators.required],
        passwordRetry: this.formBuilder.group({
          password: ['', Validators.required],
          passwordConfirmation: ['', Validators.required]
        }),
      });
    } else {
      return this.formBuilder.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        usuario: ['', Validators.required],
      });
    }
  }

  ngOnInit() {
    this.id_empleado = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id_empleado != null) {
      this.id_empleado = parseInt(this.id_empleado);
      let id_filter = this.id_empleado;
      this.empleadoService.Listar().subscribe(
        (res) => {
          let empleado_siendo_editado = res.filter(function (e) {
            return e.id == id_filter;
          });
          if (empleado_siendo_editado.length == 1) {
            this.empleado = empleado_siendo_editado[0];
            this.myForm.get('nombre').setValue(this.empleado.nombre);
            this.myForm.get('usuario').setValue(this.empleado.usuario);
            this.myForm.get('tipo').setValue(this.empleado.tipo);
          }
        }
      )
    }
    this.myForm = this.createMyForm();
  }

  atras() {
    this.navCtrl.navigateForward('home')
  }

}
