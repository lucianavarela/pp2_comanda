import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { SmartAudioService } from 'src/app/services/smart-audio/smart-audio.service';

@Component({
  selector: 'app-datos-menu',
  templateUrl: './datos-menu.component.html',
  styleUrls: ['./datos-menu.component.scss'],
})
export class DatosMenuComponent implements OnChanges {

  @Output() menuConfirmado: EventEmitter<Menu>;
  @Input() menu: Menu;
  foto: string;

  constructor(private menuService: MenuService, private errorHandler: ToastService, private audioService: SmartAudioService) {
    this.menuConfirmado = new EventEmitter();
  }

  ngOnChanges() {
  }

  seleccionar(menu: Menu) {
    this.audioService.play('inicio');
    this.menuConfirmado.emit(menu)
  }
}
