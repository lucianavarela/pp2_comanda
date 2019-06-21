import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-menu',
  templateUrl: './pedidos-menu.page.html',
  styleUrls: ['./pedidos-menu.page.scss'],
})

export class PedidosMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
