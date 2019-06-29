import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImagesService } from 'src/app/services/fotos/images.service';
import { ToastService } from '../../../services/toast/toast.service';
import { NavController } from '@ionic/angular';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-alta-menu',
  templateUrl: './alta-menu.page.html',
  styleUrls: ['./alta-menu.page.scss'],
})
export class AltaMenuPage implements OnInit {

  public altaMenuForm: FormGroup;

  validationMessages = {
    'nombre': [
      { type: 'required', message: 'Debe ingresar un nombre.' },
      { type: 'maxlength', message: 'El nombre no debe superar los 100 caracteres.' }
    ],
    'tipo': [
      { type: 'required', message: 'Debe ingresar un tipo.' }
    ],
    'precio': [
      { type: 'required', message: 'Debe ingresar un precio.' },
      { type: 'min', message: 'El precio no debe ser menor a cero.' }
    ],
    'tiempo_promedio': [
      { type: 'required', message: 'Debe ingresar un tiempo promedio.' },
      { type: 'min', message: 'El tiempo_promedio debe ser mayor a uno.' }
    ],
    'descripcion': [
      { type: 'required', message: 'Debe ingresar un descripcion.' },
      { type: 'maxlength', message: 'El descripcion no debe superar los 250 caracteres.' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private imageService: ImagesService,
    private toasterService: ToastService, private navCtrl: NavController,
    private menuService: MenuService) { 
    this.altaMenuForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])),
      tipo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      precio: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(0)
      ])),
      tiempo_promedio: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])),
      descripcion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(250)
      ])),
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    let fotos :string[] = Array<string>();    
    let hayError: Boolean = false;

/*     this.toasterService.warningToast("Se deberán tomar tres fotos!!! Aguarde...");
    await this.sleep(5000);

    for(var i = 0; i < 3; i++) {
      await this.imageService.takePhoto()
      .then(res => {
        if (res !== 'No Image Selected') {          
          this.smartAudioService.play('camera');
          fotos.push('data:image/jpg;base64,' + res);
        } 
        else {
          this.toasterService.errorToast(
            'No tomó la foto.'
          );
          
          hayError = true; 
        }
      })
      .catch(error => {
        this.toasterService.errorToast('Error: No se ha podido cargar la foto. ' + error.message);
        hayError = true;
      });

      if (hayError) {
        return;
      }
    } */

    let nombre: string = this.altaMenuForm.get('nombre').value;
    let tipo: number = this.altaMenuForm.get('tipo').value;
    let precio: number = this.altaMenuForm.get('precio').value;
    let tiempo_promedio: number = this.altaMenuForm.get('tiempo_promedio').value;
    let descripcion: string = this.altaMenuForm.get('descripcion').value;
    console.log('formulario ok');

    await this.menuService.Registrar(nombre, tipo, precio, tiempo_promedio, descripcion, fotos)
    .then(res => {
      console.log("entro");
      console.log(res);
      if(res.Estado == 'OK')
      {
        this.altaMenuForm.reset();
        this.toasterService.confirmationToast('Se ha dado de alta el nuevo producto exitosamente.');
      }    
      else
      {
        this.toasterService.errorToast('Error2: No se ha podido dar de alta el producto:' + res.Mensaje);
      }  
    })
    .catch(error => {      
      console.log("error");
      console.log(error);
      this.toasterService.errorToast('Error: No se ha podido dar de alta el producto:' + error.message);
    });
  }

  onCancelarClick() {
    this.navCtrl.pop();
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
