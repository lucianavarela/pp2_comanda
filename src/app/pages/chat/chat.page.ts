import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthFireService } from 'src/app/services/auth.service';
import { TextService } from 'src/app/services/text.service';
import { Text } from '../../models/text';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements AfterViewInit {
  title: string = 'Chat Delivery';
  allMessages: Text[];
  currentUser: any;
  currentUserId: string;
  form: FormGroup;
  colores: string[] = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning'];
  userMail: string;
  pedido: Pedido;
  @ViewChild(IonContent) content: IonContent;

  constructor(
    private router: Router,
    private textService: TextService,
    private toastService: ToastService,
    private authFireService: AuthFireService,
    private formBuilder: FormBuilder,
    private pedidosService: PedidoService,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      text: new FormControl('', Validators.required)
    });
    this.currentUserId = this.authFireService.getCurrentUserId();
    this.userMail = this.authFireService.getCurrentUserMail();
    this.currentUser = this.authService.token();
    this.updateChat();
  }

  ngAfterViewInit() {
  }

  private updateChat() {
    this.pedidosService.ListarTodos()
      .subscribe(pedidos => {
        if (this.currentUser.tipo == 'registrado') {
          this.pedido = pedidos.filter((p) => {
            return p.estado == EstadosPedido.Entregado && p.es_delivery == 1 && this.userMail == p.fire_mail_cliente
          })[0];
        } else {
          this.pedido = pedidos.filter((p) => {
            return p.estado == EstadosPedido.Entregado && p.es_delivery == 1 && this.userMail == p.fire_mail_delivery
          })[0];
        }
        this.textService.GetAlltexts().subscribe(texts => {
          this.allMessages = texts.filter(text => {
            return text.pedido == this.pedido.codigo;
          });
          this.iniciarColores();
          setTimeout(() => {
            this.content.scrollToBottom(0);
          }, 100);
        });
      });
  }

  private iniciarColores() {
    let contador = 0;
    this.allMessages.forEach(message => {
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
    text.umail = this.authFireService.getCurrentUserMail();
    text.uname = text.umail.split('@')[0];
    text.text = this.form.get('text').value;
    text.fecha = new Date().getTime();
    text.pedido = this.pedido.codigo;
    this.textService
      .save(text)
      .then(() => {
        this.updateChat();
        this.form.get('text').setValue('');
        this.content.scrollToBottom(0);
      })
      .catch(error => {
        this.toastService.errorToast(
          'Error: No se ha podido guardar el mensaje. ' + error.message
        );
      });
  }

  onLogout() {
    this.authFireService.logout();
  }
}
