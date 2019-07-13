import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { SpinnerHandlerService } from './spinner-handler/spinner-handler.service';
import { Text } from '../models/text';
import { Notificacion } from '../models/notificacion';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationRef: AngularFireList<Notificacion>;

  constructor(db: AngularFireDatabase, private authService: AuthService ) {
    this.notificationRef = db.list('notifications');
  }

  // userId puede ser el id del  usuario o el tipo de usuario si se le quiere enviar a todo un grupo. 
  save(texto: string, userId: string) {
    let notificacion: Notificacion = new Notificacion();
    notificacion.fecha = new Date().getTime();
    notificacion.text = texto;
    notificacion.uid = userId;

    return this.notificationRef.push(notificacion);
  }

  GetAllnotifications() {
    return this.notificationRef.snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    .pipe(
      map(notifications => {
        return notifications.filter(notification => {
          let token = this.authService.token();
          return (notification.uid == token['id'] || notification.uid == token['usuario'] || notification.uid == token['tipo']);
        });
      })
    );
  }
}
