import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carga-pedido',
  templateUrl: './carga-pedido.page.html',
  styleUrls: ['./carga-pedido.page.scss'],
})
export class CargaPedidoPage implements OnInit {
 
  usuarioOnline: User;

  

  constructor(private route: ActivatedRoute ) { 
    //this.usuarioOnline = this.navParams.get('usuario');
    
  }

  ionViewWillEnter() {
    this.route.params.subscribe(params => {
      this.usuarioOnline = params['usuario']; 
 });
  }

  ngOnInit() {
    
   
  }

}
