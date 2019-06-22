import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-cargar-tiempo',
  templateUrl: './cargar-tiempo.component.html',
  styleUrls: ['./cargar-tiempo.component.scss'],
})
export class CargarTiempoComponent implements OnInit {

  @Input() pedido: Pedido;
  @Output() onCancelar: EventEmitter<void>;
  @Output() onSubmit: EventEmitter<number>;
  public tomaPedidoForm: FormGroup;

  validationMessages = {
    'tiempo': [
      { type: 'required', message: 'Debe ingresar un valor para el tiempo.' },
      { type: 'min', message: 'El tiempo debe ser mayor a cero.' }
    ]
  };

  constructor(private formBuilder: FormBuilder) { 
    this.onCancelar = new EventEmitter();
    this.onSubmit = new EventEmitter();
    this.tomaPedidoForm = this.formBuilder.group({
      tiempo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ]))
    })
  }

  ngOnInit() {}

  public onPedidoSubmit() {
    let tiempo: number = this.tomaPedidoForm.get('tiempo').value;
    this.onSubmit.emit(tiempo);
  }

  public onCancelarClick(){
    this.onCancelar.emit();
  }
}
