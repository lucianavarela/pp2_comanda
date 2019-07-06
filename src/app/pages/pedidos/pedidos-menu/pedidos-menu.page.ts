import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-pedidos-menu',
  templateUrl: './pedidos-menu.page.html',
  styleUrls: ['./pedidos-menu.page.scss'],
})

export class PedidosMenuPage implements OnInit {
  usuario: any;

  constructor(private router: Router,
    private authService: AuthService) {
    this.usuario = this.authService.token();
  }

  ngOnInit() {
  }
}
