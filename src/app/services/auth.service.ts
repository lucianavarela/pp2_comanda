import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { SpinnerHandlerService } from './spinner-handler/spinner-handler.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router,
    private db: AngularFirestore, private spinner: SpinnerHandlerService) {
    }

  login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.angularFireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        return res;
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut()
      .then(res => {
        this.router.navigate(['/login']);
      });
  }

  getCurrentUserId(): string {
    return this.angularFireAuth.auth.currentUser ? this.angularFireAuth.auth.currentUser.uid : null;
  }

  getCurrentUserMail(): string {
    return this.angularFireAuth.auth.currentUser.email;
 
  }

  Registrar(email: string, password: string) {
    console.log(email + ' ' + password);
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
      //  this.angularFireAuth.
        //this.angularFireAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        console.log(this.angularFireAuth.auth.currentUser);
        return res;
      });
  }

}
