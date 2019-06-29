import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthFireService } from 'src/app/services/auth.service';
import { TextService } from 'src/app/services/text.service';
import { Text } from '../../models/text';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements AfterViewInit {
  title: string;
  allMessages: Text[];
  currentUserId: string;
  form: FormGroup;
  colores: string[] = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning'];
  userMail: string;
  pedidos: Pedido[];
  @ViewChild(IonContent) content: IonContent;

  constructor(
    private router: Router,
    private textService: TextService,
    private toastService: ToastService,
    private authService: AuthFireService,
    private formBuilder: FormBuilder,
    private pedidosService: PedidoService
  ) {
    this.form = this.formBuilder.group({
      text: new FormControl('', Validators.required)
    });

    console.log(this.router.url);
    this.title = 'Chat Delivery';
    this.currentUserId = this.authService.getCurrentUserId();
    this.userMail = this.authService.getCurrentUserMail();
    console.log(this.currentUserId);
    this.init();
  }

  private async init()  {
    this.pedidos = Array<Pedido>();
    let mailCliente = '';
    let mailDelivery = '';
    console.log(this.userMail);
    await this.pedidosService.ListarPorDelivery(this.userMail)
    .subscribe(pedidos => {
        this.pedidos = pedidos;

        this.pedidos.forEach(pedido => {
          if (pedido.fire_mail_cliente) {
            mailCliente = pedido.fire_mail_cliente;
          }

          if (pedido.fire_mail_delivery) {
            mailDelivery = pedido.fire_mail_delivery;
          }
        });
    });

    this.textService.GetAlltexts().subscribe(texts => {
      this.allMessages = texts.filter(text => {
        return ((this.pedidos.length == 0 && text.umail == this.userMail) ||
        (this.pedidos.length != 0 && (text.umail == mailCliente || text.umail == mailDelivery)));
      });
      this.iniciarColores();
      console.log(this.allMessages);
      setTimeout(() => {
         this.content.scrollToBottom(0);
      }, 100);
    });
  }

  ngAfterViewInit(): void {
  }

  private iniciarColores() {
    let contador = 0;
    this.allMessages.forEach( message => {
      let flag = false;
      const color = this.colores[contador];
      this.allMessages.forEach(message2 => {
        if (message.uid === message2.uid && !message2.color) {
          message2.color = color;
          flag = true;
        }
      });
      if (flag) {
        contador++;
      }
    });
  }

  onSubmitSendMessage() {
    const text: Text = new Text();
    text.uid = this.currentUserId;
    text.umail = this.authService.getCurrentUserMail();
    text.uname = text.umail.split('@')[0];
    text.text = this.form.get('text').value;
    text.fecha = new Date().getTime();
    this.textService
      .save(text)
      .then(() => {
        this.form.get('text').setValue('');
      })
      .catch(error => {
        this.toastService.errorToast(
          'Error: No se ha podido guardar el mensaje. ' + error.message
        );
      });
  }

  onLogout() {
    this.authService.logout();
  }
}
