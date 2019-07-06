import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { SpinnerHandlerService } from './spinner-handler/spinner-handler.service';
import { Text } from '../models/text';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  textRef: AngularFireList<Text>;

  constructor(db: AngularFireDatabase, private spinner: SpinnerHandlerService ) {
    this.textRef = db.list('texts');
    this.textRef.snapshotChanges().subscribe( x => {
      this.spinner.dismiss();
    });
  }

  save(text: Text) {
    this.spinner.presentLoadingCustom();
    return this.textRef.push(text);
  }
  updateItem(key: string, text: Text) {
    this.spinner.presentLoadingCustom();
    return this.textRef.update(key, text);
  }
  deleteItem(key: string) {
    this.spinner.presentLoadingCustom();
    return this.textRef.remove(key);
  }
  deleteEverything() {
    this.spinner.presentLoadingCustom();
    return this.textRef.remove();
  }

  GetAlltexts() {
    this.spinner.presentLoadingCustom();
    return this.textRef.snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    .pipe(
      map(texts => {
        return texts.map(text => {
          text.fechaString = new Date(text.fecha).toLocaleString();
          return text;
        });
      })
    );
  }

  GettextsByUser(uid: String) {
    this.spinner.presentLoadingCustom();
    return this.GetAlltexts().pipe(
      map(texts => {
        return texts.filter(text => {
          this.spinner.dismiss()
          return text.uid === uid;
        });
      })
    );
  }
}
